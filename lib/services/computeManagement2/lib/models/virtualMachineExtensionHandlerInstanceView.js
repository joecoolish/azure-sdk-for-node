/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the VirtualMachineExtensionHandlerInstanceView class.
 * @constructor
 * The instance view of a virtual machine extension handler.
 * @member {string} [type] Gets or sets full type of the extension handler
 * which includes both publisher and type.
 * 
 * @member {string} [typeHandlerVersion] Gets or sets the type version of the
 * extension handler.
 * 
 * @member {object} [status] Gets or sets the extension handler status.
 * 
 * @member {string} [status.code] Gets or sets the status Code.
 * 
 * @member {string} [status.level] Gets or sets the level Code. Possible
 * values for this property include: 'Info', 'Warning', 'Error'.
 * 
 * @member {string} [status.displayStatus] Gets or sets the short localizable
 * label for the status.
 * 
 * @member {string} [status.message] Gets or sets the optional detailed
 * Message, including for alerts and error messages.
 * 
 * @member {date} [status.time] Gets or sets the time of the status.
 * 
 */
function VirtualMachineExtensionHandlerInstanceView(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.type !== undefined) {
      this.type = parameters.type;
    }
    if (parameters.typeHandlerVersion !== undefined) {
      this.typeHandlerVersion = parameters.typeHandlerVersion;
    }
    if (parameters.status) {
      this.status = new models['InstanceViewStatus'](parameters.status);
    }
  }    
}


/**
 * Validate the payload against the VirtualMachineExtensionHandlerInstanceView schema
 *
 * @param {JSON} payload
 *
 */
VirtualMachineExtensionHandlerInstanceView.prototype.serialize = function () {
  var payload = {};
  if (this['type'] !== null && this['type'] !== undefined) {
    if (typeof this['type'].valueOf() !== 'string') {
      throw new Error('this[\'type\'] must be of type string.');
    }
    payload['type'] = this['type'];
  }

  if (this['typeHandlerVersion'] !== null && this['typeHandlerVersion'] !== undefined) {
    if (typeof this['typeHandlerVersion'].valueOf() !== 'string') {
      throw new Error('this[\'typeHandlerVersion\'] must be of type string.');
    }
    payload['typeHandlerVersion'] = this['typeHandlerVersion'];
  }

  if (this['status']) {
    payload['status'] = this['status'].serialize();
  }

  return payload;
};

/**
 * Deserialize the instance to VirtualMachineExtensionHandlerInstanceView schema
 *
 * @param {JSON} instance
 *
 */
VirtualMachineExtensionHandlerInstanceView.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['type'] !== undefined) {
      this['type'] = instance['type'];
    }

    if (instance['typeHandlerVersion'] !== undefined) {
      this['typeHandlerVersion'] = instance['typeHandlerVersion'];
    }

    if (instance['status']) {
      this['status'] = new models['InstanceViewStatus']().deserialize(instance['status']);
    }
  }

  return this;
};

module.exports = VirtualMachineExtensionHandlerInstanceView;