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

/**
 * Topic regenerate share access key key request
 *
 */
class TopicRegenerateKeyRequest {
  /**
   * Create a TopicRegenerateKeyRequest.
   * @member {string} keyName Key name to regenerate key1 or key2
   */
  constructor() {
  }

  /**
   * Defines the metadata of TopicRegenerateKeyRequest
   *
   * @returns {object} metadata of TopicRegenerateKeyRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TopicRegenerateKeyRequest',
      type: {
        name: 'Composite',
        className: 'TopicRegenerateKeyRequest',
        modelProperties: {
          keyName: {
            required: true,
            serializedName: 'keyName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TopicRegenerateKeyRequest;