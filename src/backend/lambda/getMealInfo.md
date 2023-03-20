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
    ingredientsText: [String, String, ...],
    image: String // Base 64 encoded image ready to be put into html
}
```

## Return Value On Failure
```javascript
return {
  statusCode: 500,
  error: "Error Message"
}
```
 