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
 * The response from the List Domain Services operation.
 */
class DomainServiceListResult extends Array {
  /**
   * Create a DomainServiceListResult.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DomainServiceListResult
   *
   * @returns {object} metadata of DomainServiceListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DomainServiceListResult',
      type: {
        name: 'Composite',
        className: 'DomainServiceListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DomainServiceElementType',
                  type: {
                    name: 'Composite',
                    className: 'DomainService'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DomainServiceListResult;