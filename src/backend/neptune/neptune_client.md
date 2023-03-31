# Neptune Client <!-- omit from toc -->

This document outlines the functions provided by our Javascript Neptune Client and their usages.

## Contents <!-- omit from toc -->
- [Accessors/Getters](#accessorsgetters)
  - [`getSavedMeals`](#getsavedmeals)
  - [`getRecentCookedMeals`](#getrecentcookedmeals)
- [Mutators/Setters](#mutatorssetters)

## Accessors/Getters

### `getSavedMeals`

Input: `(userID: String, limit=0: Integer, lastPage=0: Integer)`

Returns: `[mealObject]`

Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)

### `getRecentCookedMeals`

Input: `(userID: String, limit=0: Integer, lastPage=0: Integer)`

Returns: `[mealObject]`

Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)

## Mutators/Setters