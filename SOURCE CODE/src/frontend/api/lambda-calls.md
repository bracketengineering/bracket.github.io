# API Caller

API caller is a JavaScript class which can be used in the front end code to make requests to our backend infrastructure

This is done by making use of a [generic API call](generic-call.md).

## API Caller Class
### Imports
```Javascript
import apiCaller from 'apiCaller.js'
```

### Instantiation
```Javascript
const apiCaller = new apiCaller();

//example use
apiCaller.methodName(params);
```

## Available Functions
In the following table, the function name links to its source code definition, and the Lambda name links to its documentation.

| Function Name                                                                                                                                               | Corresponding Lambda Function                              | Description                                                    |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------- | :------------------------------------------------------------- |
| NOT DEFINED YET                                                                                                                                             | [getAccountMeals](../../backend/lambda/getAccountMeals.md) | TO DO                                                          |
| [getCategoryInfo](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L51) | [getCategoryInfo](../../backend/lambda/getCategoryInfo.md) | Returns category name, image given ID                          |
| [getExplorePage](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L37)  | [getExplorePage](../../backend/lambda/getExplorePage.md)   | Gets a host of information to be displayed on the explore page |