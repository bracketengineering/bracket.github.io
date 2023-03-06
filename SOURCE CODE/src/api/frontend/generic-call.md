
# `#genericCall()`

### Function Information

- `#genericCall()` is a protected function
- Sould not be called directly
- Makes call via AWS Amplify SDK to endpoint specified in the `methodPath`



### Input Structure

| Parameter Name | Type | Information |
| ----------- | ----------- | ----------- |
| **`apiName`** | String | type of api call (either get or set) |
| **`methodPath`** | String | path of method in API gateway |
| **`data`** | Object | JSON object of data payload to be sent to lambda function |

### Output Structure

| Parameter Name | Type | Information |
| ----------- | ----------- | ----------- |
| **`body`** | Object | JSON object returned from the api call specified by the input parameters |

___

- Defined here: [#genericCall().Structure](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L7)
