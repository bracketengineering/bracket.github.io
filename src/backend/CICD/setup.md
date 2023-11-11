# Overview

This is an overview of how we will be using cloudformation templates using SAM (Serverless Application Model). Below there are some guides on how to format a template, the components of a template and how to modify it to a specific functionality.

---

### CloudFormation

CloudFormation is an Infrastructure as Code (IaC) service provided by AWS that deploys infrastructure to the cloud for you usually via YAML templates.

### SAM (Serverless Application Model)

AWS SAM is an open-source framework developed by AWS for building serverless applications. It extends AWS CloudFormation to offer a simplified way of defining the Amazon API Gateway APIs, AWS Lambda functions, and Amazon DynamoDB tables needed by a serverless application.

---

# How we are using CloudFormation and SAM

## Directories

We are using YAML files to define our resources to be passed to CloudFormation to be deployed.

The file structure of Lambda functions must be as follows:

```
lambdas
└───── {lambda_name}
        └───── src/
                └───── {functionCodeFile}
        └───── template.yml
```

- Where {lambda_name} is the name of the lambda function
- {functionCodeFile} is the actual code for the lambda function. The table below details the names that these files should take depending on the language:

| Language   | File Name            |
| ---------- | -------------------- |
| JavaScript | `index.mjs`          |
| Python     | `lambda_function.py` |

Example:
![example](./directory_example.png)

---

## Template.yml Files

#### Transformations:

CloudFormation templates that use SAM must be transformed from SAM syntax to plain CloudFormation syntax. To do this you need to include some instructions at the top of the template to instruct CloudFormation on how to convert the template.

```yaml
AWSTemplateFormatVersion: "2010-09-09"
Transform: AWS::Serverless-2016-10-31
Description: SAM Template for {lambdaFunction_name}
```

#### Parameters:

CloudFormation templates can be passed parameters that can be used in the template. In all of the templates, the Code Pipeline we use to build these templates passes the current GitHub commit hash to the template so that the template can get the correct version of the code from S3.

```yaml
Parameters:
  CommitHash:
    Description: The commit hash for the Lambda deployment package
    Type: String
  Branch:
    Description: The branch for the Lambda deployment package
    Type: String
  APINAME:
    Description: The name of the API Gateway
    Type: String
    Default: "API_NAME" # Change this to name of API
  APIARN:
    Description: The ARN of the API Gateway
    Type: String
    Default: "arn:aws:execute-api:${AWS::Region}:${AWS::AccountId}:${APINAME}"
  APIENDPOINT:
    Description: The endpoint of the API Gateway
    Type: String
    Default: "API_ENDPOINT_NAME" # name of endpoint path
    # should be same as lambda function in form `get-explore-page`
  FunctionName:
    Description: The name of the Lambda function
    Type: String
    Default: "FUNCTION_NAME" # replace this with actual function name
  Feature:
    Description: The feature name
    Type: String
    Default: "FEATURE_NAME" # replace this with the name of the feature that this lambda function is under (name of parent folder)
```

### Resources:

The resources part of the template is where you define the lambda functions, the versions, the alias's and the APIs.

##### Lambda Function:

```yaml
function:
  Type: AWS::Serverless::Function
  Properties:
    FunctionName: !Ref FunctionName
    Description: An AWS Lambda function that ...
    CodeUri: # where code for lambda function is stored
      Bucket: "cookly-deployment-builds"
      Key: !Sub "${Branch}/${Feature}/${FunctionName}/${CommitHash}.zip"
    Role: arn:aws:iam::${AWS::AccountId}:role/cookly-lambda-neptune-get # role for lambda function to assume
    Handler: lambda_function.lambda_handler # See below
    Runtime: nodejs18.x # runtime - for Python use `python3.11`
    Timeout: 5 # time out in seconds
    MemorySize: 128 # RAM in MB (must be >= 128MB)
    Architectures:
      - "arm64" # always use arm
    Layers: # list of layers for lambda function to use
      - arn:aws:lambda:${AWS::Region}:${AWS::AccountId}:layer:neptune-client:49
```

- `file_name.function_name`: the file name of the lambda function and the name of the handler function.
  - For Python: `lambda_function.function_handler`
  - For JavaScript: `index.handler`

##### Lambda Function Alias's and Versions

```yaml
# Lambda function version
version:
  Type: AWS::Lambda::Version
  DependsOn: function
  Properties:
    FunctionName: !Ref function
    Description: !Sub "Version for ${CommitHash}." # leave as this

# Lambda function alias
alias:
  Type: AWS::Lambda::Alias
  DeletionPolicy: Retain
  Properties:
    FunctionName: !Ref function
    FunctionVersion: !GetAtt version.Version
    Name: "Production" # leave as production for all lambda functions

    # config for provisioned concurrency.
    # Remove this whole bit if there is no Provisioned concurrency for this lambda function.
    ProvisionedConcurrencyConfig:
      ProvisionedConcurrentExecutions: 3
    # REMEMBER TO DELETE THIS IF NO CONCURRENCY NEEDED
```

##### API

```yaml
# API Gateway setup ASSUMING API IS ALREADY CREATED
apiResouce:
  Type: AWS::ApiGateway::Resource
  Properties:
    ParentId: !GetAtt MyApi.RootResourceId
    PathPart: "ENDPOINT_NAME" # the endpoint in your API of the lambda function
    RestApiId: !Ref APIARN

apiMethod:
  Type: AWS::ApiGateway::Method
  Properties:
    HttpMethod: POST # Request type of method (GET/POST/PUT etc)
    ResourceId: !Ref apiResouce
    RestApiId: !Ref APIARN
    AuthorizationType: AWS_IAM
    Integration:
      IntegrationHttpMethod: POST # Almost always leave as post
      Type: AWS_PROXY
      Uri: !Sub arn:aws:apigateway:${AWS::Region}:lambda:path/2015-03-31/functions/${function.Arn}:Production/invocations
    MethodResponses:
      - StatusCode: "200"
      - StatusCode: "400"
      - StatusCode: "500"

LambdaInvokePermission:
  Type: AWS::Lambda::Permission
  Properties:
    Action: lambda:InvokeFunction
    FunctionName: !Ref function
    Principal: apigateway.amazonaws.com
    SourceArn: !Sub arn:aws:execute-api:${AWS::Region}:${AWS::AccountId}:${APINAME}/*/POST/ENDPOINT_NAME
```

- Shouldnt have to change most of the API gateway template for most lambda function integrations.
