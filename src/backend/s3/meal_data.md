# Meal Data

Information about meals is currently planned to be stored as JSON with the following format:

```javascript
{
  name: String,
  description: String,
  prepTime: Integer, // In minutes
  cookTime: Integer, // In minutes
  serves: Integer, // Number of servings this recipe makes
  rating: Number,
  macros: {
    kcal: Number,
    fat: Number,
    saturates: Number,
    carbs: Number,
    sugars: Number,
    fibre: Number,
    protein: Number,
    salt: Number
  },
  ingredients: [
    {ingredientID: String, ingredientName: String, quantity: Number, unit: String},
    {ingredientID: String, ingredientName: String, quantity: Number, unit: String},
    ...
  ],
  method: [
    {ingredientsUsed: [String, String... /*Ingredient IDs */],
     instruction: String },
    {ingredientsUsed: [String, String...], instruction: String },
    ...
  ]
}
```