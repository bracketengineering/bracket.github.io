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
  sections: ["For the sauce", "For the garnish", String, ...]
  ingredients: {
    "0": {
      id: String, sectionName: String,
      name: String, quantity: Number,
      unit: String, notes: String
    },  
    // 'notes' e.g 'chopped', 'finely diced', 'to taste'
    "1": {
      id: String, sectionName: String,
      name: String, quantity: Number,
      unit: String, notes: String
    }
  }
  method: [
    {
      ingredientSection: String, //E.g "For the sauce", so we can
        // display the right ingredients somewhere on screen, outside of
        // the specifics in the instruction
      ingredientsReferenced: [String, String],
      // Being the strings used to as keys in ingredients: {}
      instruction: String
    },
    {
      ingredientSection: String,
      ingredientsReferenced: [String, String],
      instruction: String
    }
  ]
}
```