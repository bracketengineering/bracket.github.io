# `getExplorePage()`

### Function Information

- Does not take any parameters
- Sends multiple requests to various services with just the userID
- returns all required information in the following form:
```JSON
body: {
    recentCategories: recentCategories,
    recentMeals: recentMeals,
    standardCategories: standardCategories,
    likedMeals: likedMeals,
    predictedMeals: predictedMeal,
}
```




### Input Structure

| Parameter Name | Type | Information |
| ----------- | ----------- | ----------- |
| |||

### Output Structure

| Parameter Name | Type | Information |
| ----------- | ----------- | ----------- |
| **`body`** | Object | JSON object containg `recentCategories`, `recent meals`, `standardCategories`, `likedMeals`, `predictedMeals` |

___

- Defined here: [getExplorePage().Structure](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L37)

- Underlying Lambda function: [getExplorePage.js]()