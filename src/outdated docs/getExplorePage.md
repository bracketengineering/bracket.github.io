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
  body: {
    standardCategories: [Object, ...],
    recentViewedCategries: [Object, ...],
    recentCookedMeals: [Object, ...],
    savedMeals: [Object, ...],
    lastPage: Integer
  }
}
```

> Category Object structure outlined [here](../neptune/neptune_design.md#node-properties-4)
> 
> Meal Object structure outlined [here](../neptune/neptune_design.md#node-properties)

## Return Value On Failure
```javascript
return {
  statusCode: 500,
  error: "Error Message"
}
```
 