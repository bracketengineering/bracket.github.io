# userSignUp

| Lambda ARN                                                |
| --------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:userSignUp |

 ## Expected Input Shape
 ```javascript
const event = {
  data: {
    allergens?: [String, ...], // Optional list of user's allergens.
  }
}
 ```
 

 ## Return Value On Success
```javascript
return {
  statusCode: 200,
  body: {
   neptuneID: String // User's newly generated UUID
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
 