### Example api item structure

```javascript
//Example structure for writing to user settings:
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
| userID |                                  | str  |
| mealID |                                  | str  |
| count  | No. of times user has liked meal | int  |

### Recently Cooked Meals
Table Name: `cookly-user-recent-meals`

| Column   | Description                                 | Type |
| -------- | ------------------------------------------- | ---- |
| userID   |                                             | str  |
| mealID   |                                             | str  |
| lastUsed | UNIX timestamp format (ms since 01/01/1970) | int  |

### Ingredients Table

| Column        | Description                                                 | Type  |
| ------------- | ----------------------------------------------------------- | ----- |
| ingredientID  |                                                             | str   |
| name          | String name                                                 | str   |
| substitutions | List of ingredient IDs that can be substituted for this one | [int] |

### Categories Table

| Column     | Description | Type |
| ---------- | ----------- | ---- |
| categoryID |             | str  |
| name       | String name | str  |

### Allergens Table

| Column      | Description                                        | Type  |
| ----------- | -------------------------------------------------- | ----- |
| allergenID  |                                                    | str   |
| name        | String name                                        | str   |
| ingredients | List of ingredient IDs which include this allergen | [int] |
