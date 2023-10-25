# Cognito Via Amplify

### Imports 

```javascript
import CognitoAPI from './apiScripts/amplify/cognitoAPI.js';
```

### Instantiation

```javascript
const cognito = new CognitoAPI();

// example use
cognito.methodName(params);
```
---

### Methods

| Method Name | Description                        |
| ----------- | ---------------------------------- |
| `signUp` | Submits user information to cognito - **not to be used directly.** Instead use [apiCaller.signUpUser](https://github.com/bracketengineering/quick-meals/blob/63ac5b9f97bc7cee734b3faedc08d288fe71e22d/app/apiScripts/apiCalls/apiCaller.js#L217) |
| `confirmSignUp` | Uses username and code from email to verify a new user |
| `signIn` | Signs in a user |
| `signOut` | Signs out a user |
| `globalSignOut` | Signs out a user from all devices |
| `verifyAttribute` | Verifies updated email |
| `resendConfirmationCode` | Resends confirmation code |
| `changePassword` | Sends code to email, takes this code and new password to update a user's password |
| `updateAttributes` | Updates a user setting |
| `getAccessToken` | Gets user's current access token|
| `getCognitoInfo` | Gets given name, email or userID for current user |

