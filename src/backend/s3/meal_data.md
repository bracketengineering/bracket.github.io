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
  ingredients: {
    0: {
      ingredientID: String, sectionName: String,
      ingredientName: String, quantity: Number,
      unit: String, notes: String
    },  
    // 'notes' e.g 'chopped', 'finely diced', 'to taste'
    1: {
      ingredientID: String, sectionName: String,
      ingredientName: String, quantity: Number,
      unit: String, notes: String
    },
  }
  method: [
    {
      ingredientsReferenced: [Integer, Integer],
      instruction: "Add %0% to the pan, simmer for 5 mins and then stir in %1%"},
      // Numerical references can be used to retrieve
      // the ingredient info to put inside the string,
      // meaning we can dynamically recalculate and reassign ingredients and their quantities.
    {
      ingredientsReferenced: [Integer, Integer],
       instruction: String
    }
  ]
}
```