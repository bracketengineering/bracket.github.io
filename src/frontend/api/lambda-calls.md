# API Caller

API caller is a JavaScript class which can be used in the front end code to make requests to our backend infrastructure.
This is done by making use of a [generic API call](generic-call.md).

### Imports
```Javascript
import apiCaller from 'apiCaller.js';
```

### Instantiation
```Javascript
const apiCaller = new apiCaller();

//example use
apiCaller.methodName(params);
```

## Available Functions
**For documentation on the input/output of the API Caller functions, please reference their respective [Lambda Functions](../../backend/lambda.md) below.**

In the following table, the function name links to its source code definition, and the Lambda name links to its documentation.

| Function Name                                                                                                                                                     | Corresponding Lambda Function                                        | Description                                                                   |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| NOT DEFINED YET                                                                                                                                                   | [getAccountMeals](../../backend/lambda/getAccountMeals.md)           | TO DO                                                                         |
| [getCategoryInfo](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L51)       | [getCategoryInfo](../../backend/lambda/getCategoryInfo.md)           | Returns category name, image given ID                                         |
| [getExplorePage](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L37)        | [getExplorePage](../../backend/lambda/getExplorePage.md)             | Gets a host of information to be displayed on the explore page                |
| [getFullMealInfo](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L66)       | [getFullMealInfo](../../backend/lambda/getFullMealInfo.md)           | Gets, at present, the method steps for a meal                                 |
| [getMealsInCategories](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L134) | [getMealsInCategories](../../backend/lambda/getMealsInCategories.md) | Gets all meals that match a list of categories, sorted into recommended order |
| [getMealInfo](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L85)           | [getMealInfo](../../backend/lambda/getMealInfo.md)                   | Gets all information about a meal to be displayed on small card               |
| [getNeptuneUserInfo](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L100)   | [getNeptuneUserInfo](../../backend/lambda/getNeptuneUserInfo.md)     | Gets info about a user (allergens, preferences etc)                           |
| [getQMSearch](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L115)          | [getQMSearch](../../backend/lambda/getQMSearch.md)                   | Get list of meal IDs that match a QuickMeals search                           |