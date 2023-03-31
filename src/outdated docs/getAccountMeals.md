# getAccountMeals

| Lambda ARN                                                     |
| -------------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:getAccountMeals |

 ## Expected Input Shape
 ```javascript
const event = {
  userID: Integer
}
 ```
 

 ## Return Value On Success
```javascript
return {
  statusCode: 200,
  body: {
   savedMeals: [Integer, ...],
   recentMeals: [Integer, ...]
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
 