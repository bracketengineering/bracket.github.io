# getAccountMeals

| Lambda ARN                                                     |
| -------------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:getAccountMeals |

 ## Expected Input Shape
 ```javascript
const event = {
  userID: String,
  limit: Integer, // Default 10
  lastPage: Integer // Default 0
}
 ```
 

 ## Return Value On Success

> Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)

```javascript
return {
  statusCode: 200,
  body: {
   savedMeals: [Object, ...],
   recentCookedMeals: [Object, ...],
   lastPage: Integer // For pagination
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
 