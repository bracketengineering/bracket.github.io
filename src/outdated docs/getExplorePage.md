# getExplorePage

| Lambda ARN                                                    |
| :------------------------------------------------------------ |
| arn:aws:lambda:eu-west-2:065472310374:function:getExplorePage |

 ## Expected Input Shape
 ```javascript
const event = {
  userID: String
}
 ```
 

 ## Return Value On Success
```javascript
return {
  statusCode: 200,
  // All values returned below are IDs for database items
  body: {
    recentCategories: [String],
    recentMeals: [String],
    standardCategories: [String],
    likedMeals: [String],
    predictedMeals: String,
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
 