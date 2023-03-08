# getCategoryInfo



| Lambda ARN                                                     |
| :------------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:getCategoryInfo |

## Expected Input Shape

```javascript
const event = {
  "categoryID": Integer
}
 ```

## Return Value On Success
```javascript
return {
  statusCode: 200,
  body: {
      basic_info: {
        categoryName: String
      },
      image: String // Base 64 encoded image
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