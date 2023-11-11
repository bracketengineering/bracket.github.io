# AWS Code Pipelines

## Pipeline 1: Pushing to Development from feature Branches

### Overview:
- When you push to development from a feature branch, the Code Pipeline will run the unit tests, figure out what has changed from the last commit, package up the changed code, and then place it in S3. 
- It will then invoke a Lambda function that will then deploy the infrastructure based on the Cloudformation SAM templates.

### Rules: 
1. Treat pushing to development as if it were production.
2. Ensure all code being pushed to development is complete and working.
3. When working on feature branches, only change what you are meant to be working on with that branch. If you need to change code outside the remit of that feature make a new branch from development.

---

## Pipeline 2: Pushing to Testing from Development

### Overview: 
- When changes from development are pushed into testing, it will rerun all the unit tests along with all of the integration tests which will test things like APIs, Redux thunks, DataStore etc.
- Once the tests pass, the Pipeline will package up the code by feature and place it in s3. It will then invoke a lambda function that will deploy the infrastructure by feature to allow for easy but granular roll backs.
- The pipeline will also automatically push a new version of the app to TestFlight.

### Rules:
- Only changes from development can be pushed into testing

---

## Pipeline 3: Pushing to Production from Testing

### Overview: 
- When changes are pushed into production from testing, the pipeline will run all the tests to ensure nothing has snuck in. 
- Once tests pass, the Pipeline will package up all of the cloudformation templates and source code and place it all in S3. 
- It will then invoke a lambda function that will build a singular cloudformation file from all of the cloudformation templates in S3.
- It will then invoke another lambda function that will pass this single template to cloudformation to be deployed.
- Once complete it will also trigger a build and submit of the front end app to the appstore

### Rules:
- Only changes from testing can be pushed into production



