# setMetadata

| Lambda ARN                                                 |
| ---------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:setMetadata |

 ## Expected Input Shape
 ```javascript
const event = {
  type: String,
  metadata: Object
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
 