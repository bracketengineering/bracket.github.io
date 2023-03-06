# `getCategoryInfo()`

### Function Information

- Returns things like category name, image etc
- Expected return shape:

```JSON
body: {
    categoryName: STRING,
    imageBase64: STRING
}
```

### Input Structure

| Parameter Name | Type | Information |
| ----------- | ----------- | ----------- |
| **`categoryID`** | Number | ID of category information being requested |

### Output Structure

| Parameter Name | Type | Information |
| ----------- | ----------- | ----------- |
| **`body`** | Object | JSON object returned from S3 containg information about the corresponding categoryID |

___

- Defined here: [getCategoryInfo.Structure](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L55)

- Underlying Lambda function: [getCategoryInfo.js]()