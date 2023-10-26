# getCategoryImage



| Lambda ARN                                                     |
| :------------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:getCategoryImage |

## Expected Input Shape

```javascript
const event = {
  "categoryID": String
}
 ```

## Return Value On Success
```javascript
return {
  statusCode: 200,
  body: String // Base64 encoded image
}
```

## Return Value On Failure
```javascript
return {
  statusCode: 500,
  error: "Error Message"
}
```