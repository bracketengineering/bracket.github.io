# `getMealInfo()`

### Function Information

- Gets basic meal info when meal card is clicked
- Return shape:
```JSON
body: {
    mealName: String,
    description: String,
    ingredients: [String],
    mealInfo: {
        time: String,
        difficulty: String,
        Rating: Int
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
| **`body`** | Object | JSON object returned from S3 containing the basic information for given meal ID  |

___

- Defined here: [getMealInfo().Structure](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L89)

- Underlying Lambda function: [getMealInfo.js]()