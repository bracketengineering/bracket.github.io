# Neptune Client <!-- omit from toc -->

This document outlines the functions provided by our Javascript Neptune Client and their usages. Input arguments followed by a `?` question mark indicate that those arguments are **optional**.

## Contents <!-- omit from toc -->
- [Accessors/Getters](#accessorsgetters)
  - [`getIngredients`](#getingredients)
  - [`getCategories`](#getcategories)
  - [`getMeal`](#getmeal)
  - [`getSavedMeals`](#getsavedmeals)
  - [`getRecentCookedMeals`](#getrecentcookedmeals)
  - [`getMealsInCategory`](#getmealsincategory)
- [Mutators/Setters](#mutatorssetters)
  - [`addMeal`](#addmeal)
  - [`addCategory`](#addcategory)
  - [`addUser`](#adduser)
  - [`userSavesMeal`](#usersavesmeal)
  - [`userRatesMeal`](#userratesmeal)
  - [`getQuickMealsSearch`](#getquickmealssearch)

## Accessors/Getters

### `getIngredients` 

Input: `(limit?=10: Integer, lastPage?=0: Integer)`

Returns: `{ ingredients: [Object, ...], lastPage: Integer }`

> Ingredient Object structure outlined [here](../neptune/neptune_design.md#node-properties-2)

### `getCategories`

Input: `(limit?=10: Integer, lastPage?=0: Integer)`

Returns: `[categoryObject]`

> Category Object structure outlined [here](../neptune/neptune_design.md#node-properties-4)

### `getMeal`

Input: `(mealID: String)`

Returns: `Object`, meal objects

> Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)


### `getSavedMeals`

Input: `(userID: String, limit?=10: Integer, lastPage?=0: Integer)`

Returns: `[mealObject]`

> Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)

### `getRecentCookedMeals`

Input: `(userID: String, limit?=10: Integer, lastPage?=0: Integer)`

Returns: `[mealObject]`

> Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)

### `getMealsInCategory`

Input: `(categoryID: String)`

Returns: `[Object]`, meal objects

> Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)

## Mutators/Setters

### `addMeal`

Input:
```javascript
( 
  name: String,
  prepTime: Integer,
  cookTime: Integer,
  servings: Integer,
  macroString: String,
  ingredientsString: String,
  methodString: String,
  ingredients?: [
    {
      id: String,
      quantity: Number,
      unit: String
    },
    ...
  ]
)
```

Returns: `String`, new Meal ID

### `addCategory`

Input: `name: String, meals?: [String]` 

> `meals?` is a list of Meal IDs that this category includes.

Returns: `String`, new Category ID

### `addUser`

Input: `allergens?: [String]` 

> `allergens?` is an optional list of Allergen IDs that this user is allergic to.

Returns: `String`, new User ID

### `userSavesMeal`

Input: `(userID: String, mealID: String)`

Returns: `()`

### `userRatesMeal`

Input: `(userID: String, mealID: String, rating: Number)`

Returns: `()`

### `getQuickMealsSearch`

Input: `(userID: String, ingredients: [String])`

Returns: `[Object]`, meal objects

> Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)