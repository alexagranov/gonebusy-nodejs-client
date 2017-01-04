[![Build Status](https://travis-ci.org/gonebusy/gonebusy-nodejs-client.svg?branch=master)](https://travis-ci.org/gonebusy/gonebusy-nodejs-client)

#Getting started

## Sandbox

We have a Sandbox environment to play with!

Just use [sandbox.gonebusy.com](http://sandbox.gonebusy.com) instead of where you see beta.gonebusy.com referenced, including where to create an account to retrieve your API Key.

The Sandbox environment is completely separate from the Live site - that includes meaning your Sandbox API Key will not work in the Live environment.

## Quick Start

The following shows how to import the library and use it with Bluebird Promises:

Configure your package.json:

```js
{
    "dependencies": {
        "gonebusy-nodejs-client": "^0.0.2",
        "bluebird": "^3.3.5"
    }
}
```

Make sure to ```npm install```

Then try the following in a `node` console:

1. Import the module:

    ```js
    > gonebusy = require('gonebusy-nodejs-client')
    ```

1. Configure the BASEURI for Sandbox testing

    ```js
    > gonebusy.configuration.BASEURI = 'http://sandbox.gonebusy.com/api/v1'
    ```
    
1. Configure your API Key:

    ```js
    > authorization = 'Token ac98ed08b5b0a9e7c43a233aeba841ce' // Default Sandbox token
    ```

1. Require Bluebird:

    ```js
    > Promise = require('bluebird').Promise
    ```
    
1. Promisify all ServicesController methods:

    ```js
    > services = Promise.promisifyAll(gonebusy.ServicesController)
    ```

1. Get a list of Services for the current user:

    ```js
    > services.getServicesAsync({authorization}).then((result)=>{console.log(result);})
    
    Promise {
      _bitField: 0,
      _fulfillmentHandler0: undefined,
      _rejectionHandler0: undefined,
      _promise0: undefined,
      _receiver0: undefined }
    > BaseModel {
      services: 
       [ BaseModel {
           categories: [],
           description: 'A Service for Samples',
           duration: 30,
           id: 197264885,
           isActive: true,
           name: 'Sample Service',
           ownerId: 8552697701,
           priceModelId: 2,
           resources: [Object],
           shortName: null } ] }
   ```
   
## Using Request Body Helpers

For any controller operations that expect a request body, or a set of params, there exist CreateXXXBody/UpdateXXXByIdBody/etc. helper objects corresponding to the operation.  The helper objects allow your request code to be constructed with params that conform to the GoneBusy API while still supporting Node/ES6-style property access.

The following is an example of how to use the CreateServiceBody helper object when creating a new Service:

1. Create an instance of CreateServiceBody to wrap your desired attributes into an object:

    ```js
    > new_service = new CreateServiceBody({
        name: 'My Sample Service',
        duration: 30,
        description: 'Sample Service for Testing',
        short_name: 'MyService'
      })
    
    BaseModel {
      description: 'Sample Service for Testing',
      duration: 30,
      name: 'My Sample Service',
      categories: undefined,
      priceModelId: undefined,
      resources: undefined,
      shortName: 'MyService',
      userId: undefined }
    ```
    
2. Note that the property passed to the constructor uses snake_case but the underlying `BaseModel` object allows access via ES6 camelCase:

    ```js
    > new_service.shortName
    'MyService'
    ```
    
    or even getters and setters:
    
    ```js
    > new_service.getShortName()
    'MyService'
    
    > new_service.setShortName('My Sample x2')
    undefined
    > new_service.getShortName()
    'My Sample x2'
    ```
    
3. Let's send off the request to create our new Service:

    ```js
    > services.createServiceAsync({
          authorization: 'Token ac98ed08b5b0a9e7c43a233aeba841ce',
          createServiceBody: new_service
      }).then((result)=>{console.log(result);})
      
    Promise {
      _bitField: 0,
      _fulfillmentHandler0: undefined,
      _rejectionHandler0: undefined,
      _promise0: undefined,
      _receiver0: undefined }
    > BaseModel {
      service: 
       BaseModel {
         categories: [],
         description: 'Sample Service for Testing',
         duration: 30,
         id: 4667058921,
         isActive: true,
         name: 'My Sample Service',
         ownerId: 6845037920,
         priceModelId: 3,
         resources: [ 512294687 ],
         shortName: 'My Sample x2' } }
    ```
    
## Using Response Helpers

Just as with Request Body helpers, there are Response helper objects corresponding to each CreateXXXBody/UpdateXXXByIdBody/etc. operation.  If using Promises, the success result will be a Response instance as follows:

    ```js
    > services.createServiceAsync({
          authorization: 'Token ac98ed08b5b0a9e7c43a233aeba841ce',
          createServiceBody: new_service
      }).then((resp)=>{console.log(resp.getService());})
      
    Promise {
      _bitField: 0,
      _fulfillmentHandler0: undefined,
      _rejectionHandler0: undefined,
      _promise0: undefined,
      _receiver0: undefined }
    > BaseModel {
      categories: [],
      description: 'Sample Service for Testing',
      duration: 30,
      id: 4667058921,
      isActive: true,
      name: 'My Sample Service',
      ownerId: 6845037920,
      priceModelId: 3,
      resources: [ 512294687 ],
      shortName: 'My Sample x2' }
    ```

In this example, the result of `resp.getService()` is an instance of `EntitiesServiceResponse`.
