# AWS Code Pipelines

## Pipeline 1: Pushing to new feature branches

#### Overview: 
This pipeline is used to deploy infrastructure for new features for testing when you push to new feature branches. Builds only create new infrastructure and do not let you modify existing structure.

#### Rules:
- All Typescript code should be compiled before pushing the changes.
- All AWS CloudFormation templates should be written according to our documentation.

## Pipeline 2: Development to staging

#### Overview:
This pipeline is used to push newly developed and tested lambdas/layers to a staging (testing) environment when the changes are pushed to the development branch. Only infrastructure that has been changed is redeployed.

#### Rules:
- All Typescript code should be compiled before pushing the changes.
- All lambdas should be tested in development environments.
- All AWS CloudFormation templates should be written according to our documentation.

## Pipeline 3: Staging to production

#### Overview:
This is the final stage of the pipeline used to push well-tested and constructed code to production along with deploying new infrastructure. All infrastructure is redeployed entirely.

#### Rules:
- All Typescript code should be compiled before pushing the changes.
- All lambdas should be thoroughly tested in test environments.
- All AWS CloudFormation templates should be written according to our documentation.
