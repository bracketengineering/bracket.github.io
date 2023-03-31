# API Caller <!-- omit from toc -->

API caller is a JavaScript class which can be used in the front end code to make requests to our backend infrastructure.
This is done by making use of a [generic API call](generic-call.md).

Input arguments followed by a `?` question mark indicate that those arguments are **optional**.

## Contents <!-- omit from toc -->
- [Imports](#imports)
- [Instantiation](#instantiation)
- [Available Functions](#available-functions)
  - [`getAccountMeals`](#getaccountmeals)
  - [`getCategories`](#getcategories)
  - [`getCategoryImage`](#getcategoryimage)
  - [`getExplorePage`](#getexplorepage)

## Imports
```Javascript
import apiCaller from 'apiCaller.js';
```

## Instantiation
```Javascript
const apiCaller = new apiCaller();

//example use
apiCaller.methodName(params);
```

## Available Functions

### `getAccountMeals`
Input: `()`

Returns: `{ savedMeals: [Object, ...], recentCookedMeals: [Object, ...], lastPage: Integer }`

> Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)


### `getCategories`

Input: `(limit?=10: Integer, lastPage?=0: Integer)`

Returns: `{ categories: [Object, ...], lastPage: Integer }`

> Category Object structure outlined [here](../neptune/neptune_design.md#node-properties-4)

### `getCategoryImage`

Input: `(categoryID: String)`

Returns: `String`, base64 encoded image.

### `getExplorePage`

Input: `(limit?=10: Integer, lastPage?=0: Integer)`

Returns:
```javascript
{
  standardCategories: [Object, ...],
  recentViewedCategries: [Object, ...],
  recentCookedMeals: [Object, ...],
  savedMeals: [Object, ...],
  lastPage: Integer
}
```

> Category Object structure outlined [here](../neptune/neptune_design.md#node-properties-4)
> 
> Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)