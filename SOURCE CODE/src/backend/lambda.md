# Lambda

### What is Lambda?

AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers. You only need to pay for what you use.

### Our Lambda Function Structure
```bash
├── Dynamo ───> Returned to user
│   └── S3
│       └──> Returned to user
├── Neptune ───> Returned to user
│   └── Dynamo
│       └── S3
│           └──> Returned to user
│   └── Calculations
│       └── Dynamo
│           └──> Returned to user
│       └── S3
│           └──> Returned to user
│   └── S3
│       └──> Returned to user
 
```


### Feature Branches
```bash
├── Quick Meals
│   └── Neptune
│   │   └── Calculations
│   │   │   └── Dynamo 
│   │   │   └── S3 
├── Explore
│   └── Neptune
│   │   └── Calculations
│   │   │   └── Dynamo 
│   │   │   └── S3
├── Meal Planner
│   └── Dynamo
│   │   └── S3
├── User Information
│   └── Dynamo
├── Liked Meals
│   └── Dynamo
│   │   └── S3
```
