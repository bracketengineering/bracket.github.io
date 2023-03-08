# getMealInfo

| Lambda ARN                                                 |
| ---------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:getMealInfo |

 ## Expected Input Shape
 ```javascript
const event = {
  mealID: String
}
 ```
 

 ## Return Value On Success
```javascript
return {
  statusCode: 200,
  body: {
    mealName: String,
    servings: Integer,
    prepTime: {
      time: Integer,
      unit: String // E.g "min", "hr"
    },
    cookTime: {
      time: Integer,
      unit: String
    },
    tags: [
      String,
      String,
      ...
    ],
    ingredientsText: {
      // Header names vary meal to meal
      // Header name describes ingredients for one part of the meal, i.e "For the sauce"
      "SECTION1_HEADER": [String, String, ...], 
      "SECTION2_HEADER": [String, String, ...], 
      ...
    }
  }
}
```

## Return Value On Failure
```javascript
return {
  statusCode: 500,
  error: "Error Message"
}
```
 