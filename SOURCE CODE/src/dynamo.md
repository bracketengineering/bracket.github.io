### Example api item structure

```JSON
Example structure for writing to user settings:
  {
    'userID': { S: `${userID}` },
    '0' : { BOOL: `${setting0}` },
    '1' : { BOOL: `${setting1}` },
    '2' : { BOOL: `${setting2}` }
   }
```

### LikedMeals Table

| Column | Description                      | Type |
| ------ | -------------------------------- | ---- |
| userID |                                  | int  |
| mealID |                                  | int  |
| count  | No. of times user has liked meal | int  |

### Ingredients Table

| Column        | Description                                                 | Type  |
| ------------- | ----------------------------------------------------------- | ----- |
| ingredientID  |                                                             | int   |
| name          | String name                                                 | str   |
| substitutions | List of ingredient IDs that can be substituted for this one | [int] |

### Categories Table

| Column     | Description | Type |
| ---------- | ----------- | ---- |
| categoryID |             | int  |
| name       | String name | str  |

### Allergens Table

| Column      | Description                                        | Type  |
| ----------- | -------------------------------------------------- | ----- |
| allergenID  |                                                    | int   |
| name        | String name                                        | str   |
| ingredients | List of ingredient IDs which include this allergen | [int] |
