# Neptune API Design <!-- omit from toc -->

**NOTE**: I'm not yet sure if we want to allow both "liking" and "disliking" meals and categories. I'm not quite seeing how it will tie in well with app functionality and it would be a little bit complicated to implement. Please consider this and let me know before I go ahead with implementing those particular functions. I won't repeat the liking/disliking docs below for Categories until we've decided what to do on this matter.

This document outlines the functions that will be offered by our Neptune client/API, written in Javascript, and how they will work with regards to querying the graph.

The final section also outlines which of the Neptune API functions will be used for our features (currently running in Lambda).

I will add more documentation here as more requirements arise.

## TODO <!-- omit from toc -->

- Start implementing

## Contents <!-- omit from toc -->
- [Getters](#getters)
  - [`getRecentCookedMeals(userID, limit=10, lastPage=0)`](#getrecentcookedmealsuserid-limit10-lastpage0)
  - [`getRecentViewedMeals(userID, limit=10, lastPage=0)`](#getrecentviewedmealsuserid-limit10-lastpage0)
  - [`getSavedMeals(userID, limit=10, lastPage=0)`](#getsavedmealsuserid-limit10-lastpage0)
  - [`getRecentViewedCategories(userID, limit=10, lastPage=0)`](#getrecentviewedcategoriesuserid-limit10-lastpage0)
  - [`getCategories(limit=10, lastPage=0)`](#getcategorieslimit10-lastpage0)
  - [`getMeal(userID, mealID)`](#getmealuserid-mealid)
  - [`getMealsInCategory(categoryID, limit=10, lastPage=0)`](#getmealsincategorycategoryid-limit10-lastpage0)
  - [`getUserAllergens(userID)`](#getuserallergensuserid)
  - [`getIngredients(query, limit=10, lastPage=0)`](#getingredientsquery-limit10-lastpage0)
  - [`getUserIngredientPreferences(userID)`](#getuseringredientpreferencesuserid)
  - [`getQuickMealsSearch(userID, ingredients, limit=10, lastPage=0)`](#getquickmealssearchuserid-ingredients-limit10-lastpage0)
- [Setters](#setters)
  - [`addMeal()`](#addmeal)
  - [`addUser()`](#adduser)
  - [`addIngredient()`](#addingredient)
  - [`addCategory()`](#addcategory)
  - [`userViewsMeal(userID, mealID)`](#userviewsmealuserid-mealid)
  - [`userViewsCategory(userID, mealID)`](#userviewscategoryuserid-mealid)
  - [`updateUserAllergens(userID, allergens)`](#updateuserallergensuserid-allergens)
  - [`userSavesMeal(userID, mealID)`](#usersavesmealuserid-mealid)
  - [`userUnsavesMeal(userID, mealID)`](#userunsavesmealuserid-mealid)
  - [`userRatesMeal(userID, mealID, rating)`](#userratesmealuserid-mealid-rating)
  - [`userCooksMeal(userID, mealID)`](#usercooksmealuserid-mealid)
  - [`userLikesIngredient(userID, mealID)`](#userlikesingredientuserid-mealid)
  - [`userUnlikesIngredient(userID, mealID)`](#userunlikesingredientuserid-mealid)
  - [`userDislikesIngredient(userID, mealID)`](#userdislikesingredientuserid-mealid)
  - [`userUndislikesIngredient(userID, mealID)`](#userundislikesingredientuserid-mealid)
  - [`updateUserIngredientPreferences(userID, likes, dislikes)`](#updateuseringredientpreferencesuserid-likes-dislikes)
- [Frontend Features](#frontend-features)
  - [getAccountMeals](#getaccountmeals)
  - [getExplorePage](#getexplorepage)
  - [getMealsInCategory](#getmealsincategory)
  - [User Preferences Page](#user-preferences-page)

## Getters

The following functions simply retrieve information from the graph, some returning values in a sorted fashion

### `getRecentCookedMeals(userID, limit=10, lastPage=0)`

Input Params: `(userID: STR, limit: INT, lastPage: INT)`

| Description                           | Query Outline                                                                                          |
| :------------------------------------ | :----------------------------------------------------------------------------------------------------- |
| Gets meals a user has recently cooked | Traverse from user to all meals with `hasCooked` edge, sort by `lastCooked` edge property, descending. |

### `getRecentViewedMeals(userID, limit=10, lastPage=0)`

Input Params: `(userID: STR, limit: INT, lastPage: INT)`

| Description                           | Query Outline                                                                                          |
| :------------------------------------ | :----------------------------------------------------------------------------------------------------- |
| Gets meals a user has recently viewed | Traverse from user to all meals with `hasViewed` edge, sort by `lastViewed` edge property, descending. |

### `getSavedMeals(userID, limit=10, lastPage=0)`

Input Params: `(userID: STR, limit: INT, lastPage: INT)`

| Description                 | Query Outline                                         |
| :-------------------------- | :---------------------------------------------------- |
| Gets meals a user has saved | Traverse from user to all meals with `hasSaved` edge. |

### `getRecentViewedCategories(userID, limit=10, lastPage=0)`

Input Params: `(userID: STR, limit: INT, lastPage: INT)`

| Description                                | Query Outline                                                                                                |
| :----------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| Gets categories a user has recently viewed | Traverse from user to all categories with `hasViewed` edge, sorted by `lastViewed` edge property, descending |

### `getCategories(limit=10, lastPage=0)`

Input Params: `(limit: INT, lastPage: INT)`

| Description                           | Query Outline |
| :------------------------------------ | :------------ |
| Gets all category nodes up to `limit` |               |

### `getMeal(userID, mealID)`

Input Params: `(userID: STR, mealID: STR)`

| Description              | Query Outline                                     |
| :----------------------- | :------------------------------------------------ |
| Gets a meal given its ID | Return the meal node and also run `userViewsMeal` |

### `getMealsInCategory(categoryID, limit=10, lastPage=0)`

Input Params: `(categoryID: STR, limit: INT, lastPage: INT)`

| Description                                | Query Outline |
| :----------------------------------------- | :------------ |
| Gets all meals in a category up to `limit` |               |

### `getUserAllergens(userID)`

Input Params: `(userID: STR)`

| Description                | Query Outline                                                 |
| :------------------------- | :------------------------------------------------------------ |
| Returns a user's allergens | Traverse from user to all allergens with an `allergicTo` link |

### `getIngredients(query, limit=10, lastPage=0)`

Input Params: `(query: STR, limit: INT, lastPage: INT)`


Search for ingredients, optionally with a search query.

| Description                                                      | Query Outline                                                                                              |
| :--------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| Search for ingredients in the database that match a string query | Traverse all ingredients up to `limit`. If `query` exists, filtering for those whose names contain `query` |

### `getUserIngredientPreferences(userID)`

Input Params: `(userID: STR)`

| Description                             | Query Outline                                                                                                |
| :-------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| Returns a user's ingredient preferences | Traverse from user to all ingredients with a `likes` and `dislikes` link, returning those sets as two lists. |

### `getQuickMealsSearch(userID, ingredients, limit=10, lastPage=0)` 

Recommendations in QuickMeals searches are to be implemented later.

Input Params: `(userID: STR, ingredients: [STR], limit: INT, lastPage: INT)`

| Description                                        | Query Outline                                                                                                                                                                                                                                                                                                                                                            |
| :------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Performs a quickmeals search given the ingredients | Traverse from ingredients in the input to all meals, filtering out meals that have links to ingredients or categories a user `dislike`s, and filtering out meals that have links to allergens that a user is `allergicTo`. Count the number of times that meal occurs in the result (i.e the number of ingredients matched), and sort by descending order of that count. |

## Setters

### `addMeal()`
### `addUser()`
### `addIngredient()`
### `addCategory()`

### `userViewsMeal(userID, mealID)`

Input Params: `(userID: STR, mealID: STR)`

| Description                            | Query Outline                                                                                              |
| :------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| A user clicks on a full view meal card | Add a `hasViewed` link from user to meal with the current UNIX timestamp as the `lastViewed` edge property |

### `userViewsCategory(userID, mealID)`

Input Params: `(userID: STR, categoryID: STR)`

| Description                                 | Query Outline                                                                                                                                               |
| :------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A user requests to view meals in a category | Remove a `hasViewed` link if one exists then add a `hasViewed` link from user to category with the current UNIX timestamp as the `lastViewed` edge property |

### `updateUserAllergens(userID, allergens)`

Input Params: `(userID: STR, allergens: [STR])`

`allergens` is a list of allergenIDs that the user is allergic to.

| Description                                          | Query Outline                                                                         |
| :--------------------------------------------------- | :------------------------------------------------------------------------------------ |
| User updates their preferences in their profile page | Remove all `allergicTo` links from user and add ones for each allergen in `allergens` |

### `userSavesMeal(userID, mealID)`

Input Params: `(userID: STR, mealID: STR)`

| Description                        | Query Outline                           |
| :--------------------------------- | :-------------------------------------- |
| User saves a meal to their profile | Add a `hasSaved` link from user to meal |

### `userUnsavesMeal(userID, mealID)`

Input Params: `(userID: STR, mealID: STR)`

| Description                          | Query Outline                              |
| :----------------------------------- | :----------------------------------------- |
| User unsaves a meal to their profile | Remove a `hasSaved` link from user to meal |

### `userRatesMeal(userID, mealID, rating)`

Input Params: `(userID: STR, mealID: STR, rating: FLOAT)`

| Description                      | Query Outline                                                          |
| :------------------------------- | :--------------------------------------------------------------------- |
| User rates a meal out of 5 stars | Add a `rates` link from user to meal with `rating` as an edge property |

### `userCooksMeal(userID, mealID)`

Input Params: `(userID: STR, mealID: STR)`

| Description                                          | Query Outline                                                                                              |
| :--------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| User runs through the cooking walkthrough for a meal | Add a `hasCooked` link from user to meal with the current UNIX timestamp as the `lastCooked` edge property |

### `userLikesIngredient(userID, mealID)`

Input Params: `(userID: STR, mealID: STR)`

| Description                                        | Query Outline                                                                   |
| :------------------------------------------------- | :------------------------------------------------------------------------------ |
| User likes an ingredient in their preferences menu | Add a `likes` link from user to meal and remove a `dislikes` link if one exists |

### `userUnlikesIngredient(userID, mealID)`

Input Params: `(userID: STR, mealID: STR)`

| Description                                          | Query Outline                           |
| :--------------------------------------------------- | :-------------------------------------- |
| User unlikes an ingredient in their preferences menu | Remove a `likes` link from user to meal |

### `userDislikesIngredient(userID, mealID)`

Input Params: `(userID: STR, mealID: STR)`

| Description                                           | Query Outline                                                                   |
| :---------------------------------------------------- | :------------------------------------------------------------------------------ |
| User dislikes an ingredient in their preferences menu | Add a `dislikes` link from user to meal and remove a `likes` link if one exists |

### `userUndislikesIngredient(userID, mealID)`

Input Params: `(userID: STR, mealID: STR)`

| Description                                              | Query Outline                              |
| :------------------------------------------------------- | :----------------------------------------- |
| User un-dislikes an ingredient in their preferences menu | Remove a `dislikes` link from user to meal |

### `updateUserIngredientPreferences(userID, likes, dislikes)`

Input Params: `(userID: STR, likes: [OBJ], dislikes: [OBJ])`

Object Shape: 
```javascript
const obj = {
  mealID: String,
  toBeRemoved: Integer
}
```

Since user preferences are represented as links, but we want to be able to edit preferences all in one go with minimal queries, we simply submit the preferences that have **changed** on the clientside and submit them to the server. The server can then remove and add links as needed.

| Description                             | Query Outline                                                                                                                                       |
| :-------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| Updates a user's ingredient preferences | Iterate over `likes` and `dislikes` input parameters, making use of `userLikesMeal`, `userDislikesMeal`, `userUnlikesMeal` and `userUndislikesMeal` |

## Frontend Features

### getAccountMeals

[`getRecentCookedMeals`](#getrecentcookedmealsuserid-limit) and [`getSavedMeals`](#getsavedmealsuserid-limit-lastpage0), return results together.

### getExplorePage

[`getRecentCookedMeals`](#getrecentcookedmealsuserid-limit), [`getRecentViewedCategories`](#getrecentviewedcategoriesuserid-limit-lastpage0), [`getCategories`](#getcategorieslimit-lastpage0) and then [`getSavedMeals`](#getsavedmealsuserid-limit-lastpage0). Return all results together.

### getMealsInCategory

Run [`userViewsCategory`](#userviewscategoryuserid-mealid) and return results from [`getMealsInCategory`](#getmealsincategorycategoryid-limit-lastpage0).

### User Preferences Page

Make use of [`getUserIngredientPreferences`](#getuseringredientpreferencesuserid) and [`updateUserIngredientPreferences`](#updateuseringredientpreferencesuserid-likes-dislikes) as needed.

