# getMealsInCategories

| Lambda ARN                                                          |
| ------------------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:getMealsInCategories |

 ## Expected Input Shape
 ```javascript
const event = {
  userID: String,
  categories: [String, ...] 
}
 ```
 

 ## Return Value On Success
```javascript
return {
  statusCode: 200,
  body: {
   [
    {
      mealID: String,
      categories: [String, ...],
      edgeType: String,
      value: Integer
    }, 
    ...
   ]
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
 