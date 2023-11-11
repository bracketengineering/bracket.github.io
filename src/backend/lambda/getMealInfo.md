# getMealInfo

| Lambda ARN                                                 |
| ---------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:getMealInfo |

 ## Expected Input Shape
 ```javascript
const event = {
  mealID: String
}
 ```
 
 ## Return Value On Success
```javascript
return {
  statusCode: 200,
  body: Image // Meal object
}
```

> Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)

## Return Value On Failure
```javascript
return {
  statusCode: 500,
  error: "Error Message"
}
```
 