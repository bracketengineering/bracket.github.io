# DynamoDB

## Example Input Structure

```javascript
//Example structure for writing to recently cooked meals:
const item = {
  userID: { S: `${userID}` },
  mealID: { S: `${mealID}` },
  lastUsed: { N: `${Date.now()}`}
}
```

## Tables
### Recently Cooked Meals
Table Name: `cookly-user-recent-meals`

| Column   | Description                                 | Type |
| -------- | ------------------------------------------- | ---- |
| userID   |                                             | str  |
| mealID   |                                             | str  |
| lastUsed | UNIX timestamp format (ms since 01/01/1970) | int  |

### Ingredients Table
Table Name: `cookly-ingredients`

| Column        | Description                                                 | Type  |
| ------------- | ----------------------------------------------------------- | ----- |
| ingredientID  |                                                             | str   |
| name          | String name                                                 | str   |
| substitutions | List of ingredient IDs that can be substituted for this one | [int] |

### Categories
Table Name: `cookly-categories`

| Column     | Description | Type |
| ---------- | ----------- | ---- |
| categoryID |             | str  |
| name       | String name | str  |

### Recently Used Categories
Table Name: `cookly-user-recent-categories`

| Column     | Description                                 | Type |
| ---------- | ------------------------------------------- | ---- |
| userID     |                                             | str  |
| categoryID |                                             | str  |
| lastUsed   | UNIX timestamp format (ms since 01/01/1970) | int  |

### Allergens
Table Name: `cookly-allergens`

| Column      | Description                                        | Type  |
| ----------- | -------------------------------------------------- | ----- |
| allergenID  |                                                    | str   |
| name        | String name                                        | str   |
| ingredients | List of ingredient IDs which include this allergen | [int] |
