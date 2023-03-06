# `getMealsInCategories()`

### Function Information 

- Calls neptune to get meals filtered by categories
- Expected return shape:
```JSON
body: {
    meals: [INT]
}
```


### Input Structure

| Parameter Name | Type | Information |
| ----------- | ----------- | ----------- |
| **`categories`** | [Int] | IDs of categories that User wants to search for |

### Output Structure

| Parameter Name | Type | Information |
| ----------- | ----------- | ----------- |
| **`body`** | Object | Array of meal IDs returned from neptune that match categories  |

___

- Defined here: [getMealInCategories().Structure](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L138)

- Underlying Lambda function: [getMealInCategories.js]()