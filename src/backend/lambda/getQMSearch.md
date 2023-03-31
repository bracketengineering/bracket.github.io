# getQMSearch

| Lambda ARN                                                 |
| ---------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:getQMSearch |

 ## Expected Input Shape
 ```javascript
const event = {
  userID: STR,
  ingredients: [STR], // Ingredients to search for
  session: OBJECT
}  
 ```
 

 ## Return Value On Success
```javascript
return {
  statusCode: 200,
  body: [Object, ...] // Meal objects
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
 