# API Caller <!-- omit from toc -->

API caller is a JavaScript class which can be used in the front end code to make requests to our backend infrastructure.
This is done by making use of a [generic API call](generic-call.md).

## Contents <!-- omit from toc -->
- [Imports](#imports)
- [Instantiation](#instantiation)
- [Available Functions](#available-functions)
  - [`getAccountMeals`](#getaccountmeals)

## Imports
```Javascript
import apiCaller from 'apiCaller.js';
```

## Instantiation
```Javascript
const apiCaller = new apiCaller();

//example use
apiCaller.methodName(params);
```

## Available Functions

### `getAccountMeals`
Input: `()`

Returns: `{ savedMeals: [Object, ...], recentCookedMeals: [Object, ...], lastPage: Integer }`

Shape of returned meal `Object`s outlined [here](../neptune/neptune_design.md#node-properties)

