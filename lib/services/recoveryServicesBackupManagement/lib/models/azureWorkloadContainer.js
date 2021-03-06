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
 * Container for the workloads running inside Azure Compute or Classic Compute.
 *
 * @extends models['ProtectionContainer']
 */
class AzureWorkloadContainer extends models['ProtectionContainer'] {
  /**
   * Create a AzureWorkloadContainer.
   * @member {string} [sourceResourceId] ARM ID of the virtual machine
   * represented by this Azure Workload Container
   * @member {date} [lastUpdatedTime] Time stamp when this container was
   * updated.
   * @member {object} [extendedInfo] Additional details of a workload
   * container.
   * @member {string} [extendedInfo.hostServerName] Host Os Name in case of
   * Stand Alone and Cluster Name in case of distributed container.
   * @member {object} [extendedInfo.inquiryInfo] Inquiry Status for the
   * container.
   * @member {string} [extendedInfo.inquiryInfo.status] Inquiry Status for this
   * container such as
   * InProgress | Failed | Succeeded
   * @member {object} [extendedInfo.inquiryInfo.errorDetail] Error Details if
   * the Status is non-success.
   * @member {string} [extendedInfo.inquiryInfo.errorDetail.code] Error code.
   * @member {string} [extendedInfo.inquiryInfo.errorDetail.message] Error
   * Message related to the Code.
   * @member {array} [extendedInfo.inquiryInfo.errorDetail.recommendations]
   * List of recommendation strings.
   * @member {array} [extendedInfo.inquiryInfo.inquiryDetails] Inquiry Details
   * which will have workload specific details.
   * For e.g. - For SQL and oracle this will contain different details.
   * @member {array} [extendedInfo.nodesList] List of the nodes in case of
   * distributed container.
   * @member {string} [workloadType] Workload type for which registration was
   * sent. Possible values include: 'Invalid', 'VM', 'FileFolder',
   * 'AzureSqlDb', 'SQLDB', 'Exchange', 'Sharepoint', 'VMwareVM',
   * 'SystemState', 'Client', 'GenericDataSource', 'SQLDataBase',
   * 'AzureFileShare', 'SAPHanaDatabase'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureWorkloadContainer
   *
   * @returns {object} metadata of AzureWorkloadContainer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureWorkloadContainer',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'containerType',
          clientName: 'containerType'
        },
        uberParent: 'ProtectionContainer',
        className: 'AzureWorkloadContainer',
        modelProperties: {
          friendlyName: {
            required: false,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          },
          backupManagementType: {
            required: false,
            serializedName: 'backupManagementType',
            type: {
              name: 'String'
            }
          },
          registrationStatus: {
            required: false,
            serializedName: 'registrationStatus',
            type: {
              name: 'String'
            }
          },
          healthStatus: {
            required: false,
            serializedName: 'healthStatus',
            type: {
              name: 'String'
            }
          },
          containerType: {
            required: true,
            serializedName: 'containerType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          sourceResourceId: {
            required: false,
            serializedName: 'sourceResourceId',
            type: {
              name: 'String'
            }
          },
          lastUpdatedTime: {
            required: false,
            serializedName: 'lastUpdatedTime',
            type: {
              name: 'DateTime'
            }
          },
          extendedInfo: {
            required: false,
            serializedName: 'extendedInfo',
            type: {
              name: 'Composite',
              className: 'AzureWorkloadContainerExtendedInfo'
            }
          },
          workloadType: {
            required: false,
            serializedName: 'workloadType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureWorkloadContainer;
