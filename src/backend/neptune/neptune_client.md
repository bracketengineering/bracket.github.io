# Neptune Client <!-- omit from toc -->

This document outlines the functions provided by our Javascript Neptune Client and their usages. Input arguments followed by a `?` question mark indicate that those arguments are **optional**.

## Contents <!-- omit from toc -->
- [Accessors/Getters](#accessorsgetters)
  - [`getIngredients`](#getingredients)
  - [`getCategories`](#getcategories)
  - [`getSavedMeals`](#getsavedmeals)
  - [`getRecentCookedMeals`](#getrecentcookedmeals)
- [Mutators/Setters](#mutatorssetters)
  - [`addMeal`](#addmeal)
  - [`addCategory`](#addcategory)

## Accessors/Getters

### `getIngredients` 

Input: `(limit?=10: Integer, lastPage?=0: Integer)`

Returns: `{ ingredients: [Object, ...], lastPage: Integer }`

> Ingredient Object structure outlined [here](../neptune/neptune_design.md#node-properties-2)

### `getCategories`

Input: `(limit?=10: Integer, lastPage?=0: Integer)`

Returns: `[categoryObject]`

> Category Object structure outlined [here](../neptune/neptune_design.md#node-properties-4)

### `getSavedMeals`

Input: `(userID: String, limit?=10: Integer, lastPage?=0: Integer)`

Returns: `[mealObject]`

> Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)

### `getRecentCookedMeals`

Input: `(userID: String, limit?=10: Integer, lastPage?=0: Integer)`

Returns: `[mealObject]`

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