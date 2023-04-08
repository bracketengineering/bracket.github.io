# API Caller <!-- omit from toc -->

API caller is a JavaScript class which can be used in the front end code to make requests to our backend infrastructure.
This is done by making use of a [generic API call](generic-call.md).

Input arguments followed by a `?` question mark indicate that those arguments are **optional**.

## Contents <!-- omit from toc -->
- [Imports](#imports)
- [Instantiation](#instantiation)
- [Available Functions](#available-functions)
  - [`cookMeal`](#cookmeal)
  - [`getAccountMeals`](#getaccountmeals)
  - [`getCategories`](#getcategories)
  - [`getCategoryImage`](#getcategoryimage)
  - [`getExplorePage`](#getexplorepage)
  - [`getIngredients`](#getingredients)
  - [`getMealInfo`](#getmealinfo)
  - [`getMealImage`](#getmealimage)
  - [`getMealsInCategory`](#getmealsincategory)
  - [`getQuickMealsSearch`](#getquickmealssearch)
  - [`saveMeal`](#savemeal)
  - [`signUpUser`](#signupuser)
  - [`rateMeal`](#ratemeal)

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

### `cookMeal`

Input: `(mealID: String)`

Returns: `()`

### `getAccountMeals`
Input: `(limit?=10: Integer, lastPage?=0: Integer)`

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

### `getIngredients` 

Input: `(limit?=10: Integer, lastPage?=0: Integer)`

Returns: `{ ingredients: [Object, ...], lastPage: Integer }`

> Ingredient Object structure outlined [here](../neptune/neptune_design.md#node-properties-2)

### `getMealInfo`

Input: `(mealID: String)`

Returns: `Object`, meal Object

> Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)

### `getMealImage`

Input: `(mealID: String)`

Returns: `String`, base64 encoded image.

### `getMealsInCategory`

Input: `(categoryID: String, limit?=10: Integer, lastPage?=0: Integer)`

Returns: `[Object]`, meal objects

> Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)

### `getQuickMealsSearch`

Input: `(userID: String, ingredients: [String])`

Returns: `[Object]`, meal objects

> Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)

### `saveMeal`

Input: `(userID: String, mealID: String)`

Returns: `()`

### `signUpUser`

Input: `allergens?: [String]` 

> `allergens?` is an optional list of Allergen IDs that this user is allergic to.

Returns: `String`, new User ID

### `rateMeal`

Input: `(userID: String, mealID: String)`

Returns: `()`
