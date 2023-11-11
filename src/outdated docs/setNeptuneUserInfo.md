# setNeptuneUserInfo

| Lambda ARN                                                        |
| ----------------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:setNeptuneUserInfo |

 ## Expected Input Shape
 ```javascript
const event = {
  userID: Integer,
  property: String, // E.g "allergens"
  newValue: [String, ...] // New version of the value
}
 ```
 

 ## Return Value On Success
```javascript
return {
  statusCode: 200
}
```

## Return Value On Failure
```javascript
return {
  statusCode: 500,
  error: "Error Message"
}
```
 