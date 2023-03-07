# `getQMSearch()`

### Function Information

- Returns array of meal IDs as a JSON object ordered by rating
- Expected return shape:
```JSON
body: {
    meals: [INT]
}
```

### Input Structure

| Parameter Name | Type | Information |
| ----------- | ----------- | ----------- |
| **`ingredients`** | [Int] | Array of ingredient IDs inputted by user |

### Output Structure

| Parameter Name | Type | Information |
| ----------- | ----------- | ----------- |
| **`body`** | Object | JSON object containing an meal IDs ordered by rating |

___

- Defined here: [getQMSearch](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L115)

- Underlying Lambda function: [getQMSearch.js]()