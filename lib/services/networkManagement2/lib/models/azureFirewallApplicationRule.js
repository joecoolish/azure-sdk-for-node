/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Properties of an application rule.
 *
 */
class AzureFirewallApplicationRule {
  /**
   * Create a AzureFirewallApplicationRule.
   * @member {string} [name] Name of the application rule.
   * @member {string} [description] Description of the rule.
   * @member {array} [sourceAddresses] List of source IP addresses for this
   * rule.
   * @member {array} [protocols] Array of ApplicationRuleProtocols.
   * @member {array} [targetUrls] List of URLs for this rule.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AzureFirewallApplicationRule
   *
   * @returns {object} metadata of AzureFirewallApplicationRule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureFirewallApplicationRule',
      type: {
        name: 'Composite',
        className: 'AzureFirewallApplicationRule',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          sourceAddresses: {
            required: false,
            serializedName: 'sourceAddresses',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          protocols: {
            required: false,
            serializedName: 'protocols',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AzureFirewallApplicationRuleProtocolElementType',
                  type: {
                    name: 'Composite',
                    className: 'AzureFirewallApplicationRuleProtocol'
                  }
              }
            }
          },
          targetUrls: {
            required: false,
            serializedName: 'targetUrls',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AzureFirewallApplicationRule;
