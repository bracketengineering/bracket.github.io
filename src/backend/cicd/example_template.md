# Example Cloudformation Template

```yaml
AWSTemplateFormatVersion: "2010-09-09"
Transform: AWS::Serverless-2016-10-31
Description: SAM Template for {lambdaFunction_name}

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
  RootResouceID:
    Description: The ID of the root resource of the API Gateway
    Type: String
    Default: "ROOT_ID" # replace this with the ID of the root resource of the API Gateway


Resources:
  function:
    Type: AWS::Serverless::Function
    Properties:
      FunctionName: !Ref FunctionName
      Description: An AWS Lambda function that ...
      CodeUri: # where code for lambda function is stored
        Bucket: "cookly-deployment-builds"
        Key: !Sub "${Branch}/${Feature}/${FunctionName}/${CommitHash}.zip"
      Role: arn:aws:iam::${AWS::AccountId}:role/cookly-lambda-neptune-get # role for lambda function to assume
      Handler: index.handler # handler for lambda function - (for python use `lambda_function.lambda_handler`)
      Runtime: nodejs18.x # runtime - (for Python use `python3.11`)
      Timeout: 5 # time out in seconds
      MemorySize: 128 # RAM in MB (must be >= 128MB)
      Architectures:
        - "arm64" # always use arm
      Layers: # list of layers for lambda function to use
        - arn:aws:lambda:${AWS::Region}:${AWS::AccountId}:layer:neptune-client:49

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

  # API Gateway setup ASSUMING API IS ALREADY CREATED
  apiResouce:
    Type: AWS::ApiGateway::Resource
    Properties:
      ParentId: !Ref RootResouceID
      PathPart: !Ref APIENDPOINT" # the endpoint in your API of the lambda function
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