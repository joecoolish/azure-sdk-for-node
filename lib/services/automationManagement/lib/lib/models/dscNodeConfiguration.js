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
 * Definition of the dsc node configuration.
 *
 * @extends models['ProxyResource']
 */
class DscNodeConfiguration extends models['ProxyResource'] {
  /**
   * Create a DscNodeConfiguration.
   * @member {date} [lastModifiedTime] Gets or sets the last modified time.
   * @member {date} [creationTime] Gets or sets creation time.
   * @member {object} [configuration] Gets or sets the configuration of the
   * node.
   * @member {string} [configuration.name] Gets or sets the name of the Dsc
   * configuration.
   * @member {string} [source] Source of node configuration.
   * @member {number} [nodeCount] Number of nodes with this nodeconfiguration
   * assigned
   * @member {boolean} [incrementNodeConfigurationBuild] If a new build version
   * of NodeConfiguration is required.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DscNodeConfiguration
   *
   * @returns {object} metadata of DscNodeConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DscNodeConfiguration',
      type: {
        name: 'Composite',
        className: 'DscNodeConfiguration',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          lastModifiedTime: {
            required: false,
            serializedName: 'properties.lastModifiedTime',
            type: {
              name: 'DateTime'
            }
          },
          creationTime: {
            required: false,
            serializedName: 'properties.creationTime',
            type: {
              name: 'DateTime'
            }
          },
          configuration: {
            required: false,
            serializedName: 'properties.configuration',
            type: {
              name: 'Composite',
              className: 'DscConfigurationAssociationProperty'
            }
          },
          source: {
            required: false,
            serializedName: 'properties.source',
            type: {
              name: 'String'
            }
          },
          nodeCount: {
            required: false,
            serializedName: 'properties.nodeCount',
            type: {
              name: 'Number'
            }
          },
          incrementNodeConfigurationBuild: {
            required: false,
            serializedName: 'properties.incrementNodeConfigurationBuild',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = DscNodeConfiguration;