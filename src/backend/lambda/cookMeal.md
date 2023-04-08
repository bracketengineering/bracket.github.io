# cookMeal

| Lambda ARN                                              |
| ------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:cookMeal |

 ## Expected Input Shape
 ```javascript
const event {
  userID: String,
  mealID: String
}
 ```
 

 ## Return Value On Success
```javascript
return {
  statusCode: 200,
}
```

## Return Value On Failure
```javascript
return {
  statusCode: 500,
  error: "Error Message"
}
```
 