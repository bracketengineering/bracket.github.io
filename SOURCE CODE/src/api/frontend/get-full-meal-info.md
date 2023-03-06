# `getFullMealInfo()`

### Function Information

- Gets remaining meal info when meal card is clicked
- Returns JSON object of method steps:
```JSON
body: {
    method: {
        step1: String,
        step2: String
    }
}
```

### Input Structure

| Parameter Name | Type | Information |
| ----------- | ----------- | ----------- |
| **`mealID`** | Number | ID of meal that information is being request about |

### Output Structure

| Parameter Name | Type | Information |
| ----------- | ----------- | ----------- |
| **`body`** | Object | JSON object returned from S3 containing method for given meal ID  |

___

- Defined here: [getFullMealInfo().Structure](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L70)

- Underlying Lambda function: [getFullMealInfo.js]()