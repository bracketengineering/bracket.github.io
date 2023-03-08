# getFullMealInfo

| Lambda ARN                                                     |
| :------------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:getFullMealInfo |

 ## Expected Input Shape
 ```javascript
const event = {
  userID: String,
  mealID: String
}
 ```
 

 ## Return Value On Success
```javascript
return {
  statusCode: 200,
  body: {
    method: [
      "Bring a large pot of water to the boil.",
      String,
      String,
      ...
    ]
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
 