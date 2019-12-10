# Getting started

Send SMS with Onfon Media SMS Platform.

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=OnfonMedia%20SMS%20Gateway-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=OnfonMedia%20SMS%20Gateway-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `OnfonMediaSMSGatewayLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=OnfonMedia%20SMS%20Gateway-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=OnfonMedia%20SMS%20Gateway-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=OnfonMedia%20SMS%20Gateway-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=OnfonMedia%20SMS%20Gateway-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  OnfonMedia SMS GatewayController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=OnfonMedia%20SMS%20GatewayController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| accessKey | Network Layer Access Key |
| apiKey | Used for authentication purpose and pass this parameter in URL encoded format. |
| clientId | Used for authentication purpose and pass this parameter in URL encoded format. |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.accessKey = "ACCESS_KEY"; // Network Layer Access Key
lib.Configuration.apiKey = "API_KEY"; // Used for authentication purpose and pass this parameter in URL encoded format.
lib.Configuration.clientId = "CLIENT_ID"; // Used for authentication purpose and pass this parameter in URL encoded format.

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [AccountController](#account_controller)
* [TemplateController](#template_controller)
* [SMSController](#sms_controller)
* [GROUPController](#group_controller)
* [CampaignController](#campaign_controller)

## <a name="account_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AccountController") AccountController

### Get singleton instance

The singleton instance of the ``` AccountController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AccountController;
```

### <a name="get_credit_balance"></a>![Method: ](https://apidocs.io/img/method.png ".AccountController.getCreditBalance") getCreditBalance

> Get Credit Balance


```javascript
function getCreditBalance(callback)
```

#### Example Usage

```javascript


    controller.getCreditBalance(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="template_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TemplateController") TemplateController

### Get singleton instance

The singleton instance of the ``` TemplateController ``` class can be accessed from the API Client.

```javascript
var controller = lib.TemplateController;
```

### <a name="get_template_list"></a>![Method: ](https://apidocs.io/img/method.png ".TemplateController.getTemplateList") getTemplateList

> Get Template List


```javascript
function getTemplateList(callback)
```

#### Example Usage

```javascript


    controller.getTemplateList(function(error, response, context) {

    
    });
```



### <a name="create_new_template"></a>![Method: ](https://apidocs.io/img/method.png ".TemplateController.createNewTemplate") createNewTemplate

> Create New Template


```javascript
function createNewTemplate(messageTemplate, templateName, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageTemplate |  ``` Required ```  | Template text. |
| templateName |  ``` Required ```  | Name of template |



#### Example Usage

```javascript

    var messageTemplate = 'MessageTemplate';
    var templateName = 'TemplateName';

    controller.createNewTemplate(messageTemplate, templateName, function(error, response, context) {

    
    });
```



### <a name="update_template"></a>![Method: ](https://apidocs.io/img/method.png ".TemplateController.updateTemplate") updateTemplate

> Update Template


```javascript
function updateTemplate(messageTemplate, templateName, id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageTemplate |  ``` Required ```  | Template text. |
| templateName |  ``` Required ```  | Name of template |
| id |  ``` Required ```  | id of template |



#### Example Usage

```javascript

    var messageTemplate = 'MessageTemplate';
    var templateName = 'TemplateName';
    var id = 18;

    controller.updateTemplate(messageTemplate, templateName, id, function(error, response, context) {

    
    });
```



### <a name="delete_template"></a>![Method: ](https://apidocs.io/img/method.png ".TemplateController.deleteTemplate") deleteTemplate

> Delete Template


```javascript
function deleteTemplate(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | id of template |



#### Example Usage

```javascript

    var id = 18;

    controller.deleteTemplate(id, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sms_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SMSController") SMSController

### Get singleton instance

The singleton instance of the ``` SMSController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SMSController;
```

### <a name="get_sent_message_list"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.getSentMessageList") getSentMessageList

> Get Sent Message List


```javascript
function getSentMessageList(enddate, fromdate, length, start, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| enddate |  ``` Required ```  | Date format must be in yyyy-mm-dd |
| fromdate |  ``` Required ```  | Date format must be in yyyy-mm-dd |
| length |  ``` Required ```  | Ending index value to fetch the campaign detail. |
| start |  ``` Required ```  | Starting index value to fetch the campaign detail. |



#### Example Usage

```javascript

    var enddate = date("D M d, Y G:i");
    var fromdate = date("D M d, Y G:i");
    var length = 18;
    var start = 18;

    controller.getSentMessageList(enddate, fromdate, length, start, function(error, response, context) {

    
    });
```



### <a name="get_sent_message_status"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.getSentMessageStatus") getSentMessageStatus

> Get Sent Message Status


```javascript
function getSentMessageStatus(messageId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageId |  ``` Required ```  | MessageId of message |



#### Example Usage

```javascript

    var messageId = 18;

    controller.getSentMessageStatus(messageId, function(error, response, context) {

    
    });
```



### <a name="get_create_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.getCreateSMS") getCreateSMS

> Create SMS


```javascript
function getCreateSMS(message, mobileNumber, senderId, coRelator, isFlash, isUnicode, linkId, groupId, scheduleTime, serviceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| message |  ``` Required ```  | text message to send |
| mobileNumber |  ``` Required ```  | Use mobile number as comma sepreated to send message on multiple mobile number e.g. 78461230,78945612 |
| senderId |  ``` Required ```  | Approved Sender Id |
| coRelator |  ``` Optional ```  | Parameter required for using SDP OnDemand Service |
| isFlash |  ``` Optional ```  | Is_Flash is true or false for flash message |
| isUnicode |  ``` Optional ```  | Is_Unicode is true or false for unicode message |
| linkId |  ``` Optional ```  | Parameter required for using SDP OnDemand Service |
| groupId |  ``` Optional ```  | Valid group-id of current user (only for group message otherwise leave empty string) |
| scheduleTime |  ``` Optional ```  | scheduleTime Date in yyyy-MM-dd HH:MM (only for schedule message) |
| serviceId |  ``` Optional ```  | Parameter required for using SDP OnSubscription Service |



#### Example Usage

```javascript

    var message = 'Message';
    var mobileNumber = 'MobileNumber';
    var senderId = 'SenderId';
    var coRelator = 'CoRelator';
    var isFlash = false;
    var isUnicode = false;
    var linkId = 'LinkId';
    var groupId = 'groupId';
    var scheduleTime = 'scheduleTime';
    var serviceId = 'serviceId';

    controller.getCreateSMS(message, mobileNumber, senderId, coRelator, isFlash, isUnicode, linkId, groupId, scheduleTime, serviceId, function(error, response, context) {

    
    });
```



### <a name="create_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createSMS") createSMS

> Create SMS


```javascript
function createSMS(message, mobileNumber, senderId, coRelator, isFlash, isUnicode, linkId, groupId, scheduleTime, serviceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| message |  ``` Required ```  | text message to send |
| mobileNumber |  ``` Required ```  | Use mobile number as comma sepreated to send message on multiple mobile number e.g. 78461230,78945612 |
| senderId |  ``` Required ```  | Approved Sender Id |
| coRelator |  ``` Optional ```  | Parameter required for using SDP OnDemand Service |
| isFlash |  ``` Optional ```  | Is_Flash is true or false for flash message |
| isUnicode |  ``` Optional ```  | Is_Unicode is true or false for unicode message |
| linkId |  ``` Optional ```  | Parameter required for using SDP OnDemand Service |
| groupId |  ``` Optional ```  | Valid group-id of current user (only for group message otherwise leave empty string) |
| scheduleTime |  ``` Optional ```  | scheduleTime Date in yyyy-MM-dd HH:MM (only for schedule message) |
| serviceId |  ``` Optional ```  | Parameter required for using SDP OnSubscription Service |



#### Example Usage

```javascript

    var message = 'Message';
    var mobileNumber = 'MobileNumber';
    var senderId = 'SenderId';
    var coRelator = 'CoRelator';
    var isFlash = false;
    var isUnicode = false;
    var linkId = 'LinkId';
    var groupId = 'groupId';
    var scheduleTime = 'scheduleTime';
    var serviceId = 'serviceId';

    controller.createSMS(message, mobileNumber, senderId, coRelator, isFlash, isUnicode, linkId, groupId, scheduleTime, serviceId, function(error, response, context) {

    
    });
```



### <a name="get_create_bulk_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.getCreateBulkSMS") getCreateBulkSMS

> Create Bulk SMS


```javascript
function getCreateBulkSMS(mobileNumberMessage, senderId, coRelator, isFlash, isUnicode, linkId, scheduleTime, serviceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| mobileNumberMessage |  ``` Required ```  | Please ensure while submitting the request the message should be passed in encoded format. e.g. 78461230^test~78945612^hello |
| senderId |  ``` Required ```  | Approved Sender Id |
| coRelator |  ``` Optional ```  | Parameter required for using SDP OnDemand Service |
| isFlash |  ``` Optional ```  | Is_Flash is true or false for flash message |
| isUnicode |  ``` Optional ```  | Is_Unicode is true or false for unicode message |
| linkId |  ``` Optional ```  | Parameter required for using SDP OnDemand Service |
| scheduleTime |  ``` Optional ```  | scheduleTime Date in yyyy-MM-dd HH:MM (only for schedule message) |
| serviceId |  ``` Optional ```  | Parameter required for using SDP OnSubscription Service |



#### Example Usage

```javascript

    var mobileNumberMessage = MobileNumber_Message;
    var senderId = 'SenderId';
    var coRelator = 'CoRelator';
    var isFlash = false;
    var isUnicode = false;
    var linkId = 'LinkId';
    var scheduleTime = date("D M d, Y G:i");
    var serviceId = 'serviceId';

    controller.getCreateBulkSMS(mobileNumberMessage, senderId, coRelator, isFlash, isUnicode, linkId, scheduleTime, serviceId, function(error, response, context) {

    
    });
```



### <a name="create_bulk_sms"></a>![Method: ](https://apidocs.io/img/method.png ".SMSController.createBulkSMS") createBulkSMS

> Create Bulk SMS


```javascript
function createBulkSMS(messageParameters, senderId, isFlash, isUnicode, scheduleDateTime, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| messageParameters |  ``` Required ```  ``` Collection ```  | TODO: Add a parameter description |
| senderId |  ``` Required ```  | Approved Sender Id |
| isFlash |  ``` Optional ```  | Is_Flash is true or false for flash message |
| isUnicode |  ``` Optional ```  | Is_Unicode is true or false for unicode message |
| scheduleDateTime |  ``` Optional ```  | scheduleTime Date in yyyy-MM-dd HH:MM (only for schedule message) |



#### Example Usage

```javascript

    var messageParameters = ['MessageParameters'];
    var senderId = 'SenderId';
    var isFlash = false;
    var isUnicode = false;
    var scheduleDateTime = date("D M d, Y G:i");

    controller.createBulkSMS(messageParameters, senderId, isFlash, isUnicode, scheduleDateTime, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="group_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GROUPController") GROUPController

### Get singleton instance

The singleton instance of the ``` GROUPController ``` class can be accessed from the API Client.

```javascript
var controller = lib.GROUPController;
```

### <a name="get_group_list"></a>![Method: ](https://apidocs.io/img/method.png ".GROUPController.getGroupList") getGroupList

> Get Group List


```javascript
function getGroupList(callback)
```

#### Example Usage

```javascript


    controller.getGroupList(function(error, response, context) {

    
    });
```



### <a name="create_new_group"></a>![Method: ](https://apidocs.io/img/method.png ".GROUPController.createNewGroup") createNewGroup

> Create New Group


```javascript
function createNewGroup(groupName, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| groupName |  ``` Required ```  | Name for new group |



#### Example Usage

```javascript

    var groupName = 'GroupName';

    controller.createNewGroup(groupName, function(error, response, context) {

    
    });
```



### <a name="update_group"></a>![Method: ](https://apidocs.io/img/method.png ".GROUPController.updateGroup") updateGroup

> Update Group


```javascript
function updateGroup(groupName, id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| groupName |  ``` Required ```  | Name for new group |
| id |  ``` Required ```  | GroupID |



#### Example Usage

```javascript

    var groupName = 'GroupName';
    var id = 'id';

    controller.updateGroup(groupName, id, function(error, response, context) {

    
    });
```



### <a name="create_sub_group_group"></a>![Method: ](https://apidocs.io/img/method.png ".GROUPController.createSubGroupGroup") createSubGroupGroup

> Create Sub-Group Group


```javascript
function createSubGroupGroup(groupName, id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| groupName |  ``` Required ```  | Name for new group |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var groupName = 'GroupName';
    var id = 'Id';

    controller.createSubGroupGroup(groupName, id, function(error, response, context) {

    
    });
```



### <a name="delete_group"></a>![Method: ](https://apidocs.io/img/method.png ".GROUPController.deleteGroup") deleteGroup

> Delete Group


```javascript
function deleteGroup(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 18;

    controller.deleteGroup(id, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="campaign_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CampaignController") CampaignController

### Get singleton instance

The singleton instance of the ``` CampaignController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CampaignController;
```

### <a name="get_campaign_message_status"></a>![Method: ](https://apidocs.io/img/method.png ".CampaignController.getCampaignMessageStatus") getCampaignMessageStatus

> Get Campaign Message Status


```javascript
function getCampaignMessageStatus(campaignId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| campaignId |  ``` Required ```  | First user have to call Get Campaigns api for CampaignId |



#### Example Usage

```javascript

    var campaignId = 18;

    controller.getCampaignMessageStatus(campaignId, function(error, response, context) {

    
    });
```



### <a name="get_campaigns"></a>![Method: ](https://apidocs.io/img/method.png ".CampaignController.getCampaigns") getCampaigns

> Get Campaigns


```javascript
function getCampaigns(enddate, fromdate, length, start, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| enddate |  ``` Required ```  | Date format must be in yyyy-mm-dd |
| fromdate |  ``` Required ```  | Date format must be in yyyy-mm-dd |
| length |  ``` Required ```  | Ending index value to fetch the campaign detail. |
| start |  ``` Required ```  | Starting index value to fetch the campaign detail. |



#### Example Usage

```javascript

    var enddate = date("D M d, Y G:i");
    var fromdate = date("D M d, Y G:i");
    var length = 18;
    var start = 18;

    controller.getCampaigns(enddate, fromdate, length, start, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



