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
 * Defines a list of relevant webpage links.
 *
 * @extends models['SearchResultsAnswer']
 */
class WebWebAnswer extends models['SearchResultsAnswer'] {
  /**
   * Create a WebWebAnswer.
   * @member {array} value A list of webpages that are relevant to the query.
   * @member {boolean} [someResultsRemoved] A Boolean value that indicates
   * whether the response excluded some results from the answer. If Bing
   * excluded some results, the value is true.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WebWebAnswer
   *
   * @returns {object} metadata of WebWebAnswer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Web/WebAnswer',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'WebWebAnswer',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
            type: {
              name: 'String'
            }
          },
          followUpQueries: {
            required: false,
            readOnly: true,
            serializedName: 'followUpQueries',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'QueryElementType',
                  type: {
                    name: 'Composite',
                    className: 'Query'
                  }
              }
            }
          },
          queryContext: {
            required: false,
            readOnly: true,
            serializedName: 'queryContext',
            type: {
              name: 'Composite',
              className: 'QueryContext'
            }
          },
          totalEstimatedMatches: {
            required: false,
            readOnly: true,
            serializedName: 'totalEstimatedMatches',
            type: {
              name: 'Number'
            }
          },
          isFamilyFriendly: {
            required: false,
            readOnly: true,
            serializedName: 'isFamilyFriendly',
            type: {
              name: 'Boolean'
            }
          },
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'WebPageElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'WebPage'
                  }
              }
            }
          },
          someResultsRemoved: {
            required: false,
            readOnly: true,
            serializedName: 'someResultsRemoved',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = WebWebAnswer;
