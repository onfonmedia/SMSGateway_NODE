/**
  * @module OnfonMediaSMSGatewayLib
  *
  * Send SMS with Onfon Media SMS Platform.
  */

'use strict';

const Configuration = require('./configuration');
const AccountController = require('./Controllers/AccountController');
const TemplateController = require('./Controllers/TemplateController');
const SMSController = require('./Controllers/SMSController');
const GROUPController = require('./Controllers/GROUPController');
const CampaignController = require('./Controllers/CampaignController');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of OnfonMediaSMSGatewayLib
    Configuration,
    // controllers of OnfonMediaSMSGatewayLib
    AccountController,
    TemplateController,
    SMSController,
    GROUPController,
    CampaignController,
    // models of OnfonMediaSMSGatewayLib
    // exceptions of OnfonMediaSMSGatewayLib
    APIException,
};

module.exports = initializer;
