# getIngredients



| Lambda ARN                                                     |
| :------------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:getIngredients |

## Expected Input Shape

```javascript
const event = {
  limit: Integer,
  lastPage: Integer
}
 ```

## Return Value On Success

> Ingredient Object structure outlined [here](../neptune/neptune_design.md#node-properties-2)

```javascript
return {
  statusCode: 200,
  body: {
    ingredients: [Object, ...],
    lastPage: Integer
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