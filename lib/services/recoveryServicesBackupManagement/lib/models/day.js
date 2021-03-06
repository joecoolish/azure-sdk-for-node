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
 * Day of the week.
 *
 */
class Day {
  /**
   * Create a Day.
   * @member {number} [date] Date of the month
   * @member {boolean} [isLast] Whether Date is last date of month
   */
  constructor() {
  }

  /**
   * Defines the metadata of Day
   *
   * @returns {object} metadata of Day
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Day',
      type: {
        name: 'Composite',
        className: 'Day',
        modelProperties: {
          date: {
            required: false,
            serializedName: 'date',
            type: {
              name: 'Number'
            }
          },
          isLast: {
            required: false,
            serializedName: 'isLast',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = Day;
