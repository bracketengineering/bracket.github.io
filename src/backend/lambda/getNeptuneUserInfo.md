# getNeptuneUserInfo

| Lambda ARN                                                        |
| ----------------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:getNeptuneUserInfo |

 ## Expected Input Shape
 ```javascript
const event = {
  userID: String
}
 ```
 

 ## Return Value On Success
```javascript
return {
  statusCode: 200,
  body: {
    id: String,
    label: 'user',
    allergens: [String, ...],
    preferences: [String, ...], 
    dislikedIngredients: [String, ...],
    dislikedCategories: [String, ...]
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
 