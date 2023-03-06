# `setMetadata()`

### Function Information

- Sends metadata information to S3
- To be used for things like button presses etc

### Input Structure

| Parameter Name | Type | Information |
| ----------- | ----------- | ----------- |
| **`feature`** | String | name of feature from which request metadata is being sent |
| **`query`** | Object | JSON object of information sent in query |

- See here for [query parameter input shape]()

### Output Structure

| Parameter Name | Type | Information
| ----------- | ----------- | ----------- |
||||

___

- Defined here: [setMetadata().Structure](https://github.com/bracketengineering/quick-meals/blob/2d5008af9118de94462c417512302639d0137e27/app/apiScripts/apiCalls/apiCaller.js#L157)

- Underlying Lambda function: [setMetadata.js]()