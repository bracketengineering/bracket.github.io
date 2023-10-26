# getCategories



| Lambda ARN                                                     |
| :------------------------------------------------------------- |
| arn:aws:lambda:eu-west-2:065472310374:function:getCategories |

## Expected Input Shape

```javascript
const event = {
  limit: Integer,
  lastPage: Integer
}
 ```

## Return Value On Success

> Category Object structure outlined [here](../neptune/neptune_design.md#node-properties-4)

```javascript
return {
  statusCode: 200,
  body: {
    categories: [Object, ...],
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