# getMealsInCategory

| Lambda ARN                                                          |
| ------------------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:getMealsInCategories |

 ## Expected Input Shape
 ```javascript
const event = {
  userID: String,
  categoryID: String,
  limit: Integer,
  lastPage: Integer
}
 ```
> Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)

 ## Return Value On Success
```javascript
return {
  statusCode: 200,
  body: [Object, ...]
}
```

## Return Value On Failure
```javascript
return {
  statusCode: 500,
  error: "Error Message"
}
```
 