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
 * Result of AnalyzeImage operation.
 *
 */
class ImageAnalysis {
  /**
   * Create a ImageAnalysis.
   * @member {array} [categories] An array indicating identified categories.
   * @member {object} [adult] A property scoring on whether the image is
   * adult-oriented and/or racy.
   * @member {boolean} [adult.isAdultContent] A value indicating if the image
   * contains adult-oriented content.
   * @member {boolean} [adult.isRacyContent] A value indicating if the image is
   * race.
   * @member {number} [adult.adultScore] Score from 0 to 1 that indicates how
   * much of adult content is within the image.
   * @member {number} [adult.racyScore] Score from 0 to 1 that indicates how
   * suggestive is the image.
   * @member {object} [color] A property scoring on color spectrums.
   * @member {string} [color.dominantColorForeground] Possible dominant
   * foreground color.
   * @member {string} [color.dominantColorBackground] Possible dominant
   * background color.
   * @member {array} [color.dominantColors] An array of possible dominant
   * colors.
   * @member {string} [color.accentColor] Possible accent color.
   * @member {boolean} [color.isBWImg] A value indicating if the image is black
   * and white.
   * @member {object} [imageType] A property indicating type of image (whether
   * it's clipart or line drawing)
   * @member {number} [imageType.clipArtType] Confidence level that the image
   * is a clip art.
   * @member {number} [imageType.lineDrawingType] Confidence level that the
   * image is a line drawing.
   * @member {array} [tags] A list of tags with confidence level.
   * @member {object} [description] Description of the image.
   * @member {array} [description.tags] A collection of image tags.
   * @member {array} [description.captions] A list of captions, sorted by
   * confidence level.
   * @member {string} [description.requestId] Id of the REST API request.
   * @member {object} [description.metadata] Image metadata
   * @member {number} [description.metadata.width] Image width
   * @member {number} [description.metadata.height] Image height
   * @member {string} [description.metadata.format] Image format
   * @member {array} [faces] An array of possible faces within the image.
   * @member {string} [requestId] Id of the request for tracking purposes.
   * @member {object} [metadata] Image metadata
   * @member {number} [metadata.width] Image width
   * @member {number} [metadata.height] Image height
   * @member {string} [metadata.format] Image format
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageAnalysis
   *
   * @returns {object} metadata of ImageAnalysis
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageAnalysis',
      type: {
        name: 'Composite',
        className: 'ImageAnalysis',
        modelProperties: {
          categories: {
            required: false,
            serializedName: 'categories',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CategoryElementType',
                  type: {
                    name: 'Composite',
                    className: 'Category'
                  }
              }
            }
          },
          adult: {
            required: false,
            serializedName: 'adult',
            type: {
              name: 'Composite',
              className: 'AdultInfo'
            }
          },
          color: {
            required: false,
            serializedName: 'color',
            type: {
              name: 'Composite',
              className: 'ColorInfo'
            }
          },
          imageType: {
            required: false,
            serializedName: 'imageType',
            type: {
              name: 'Composite',
              className: 'ImageType'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ImageTagElementType',
                  type: {
                    name: 'Composite',
                    className: 'ImageTag'
                  }
              }
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'Composite',
              className: 'ImageDescriptionDetails'
            }
          },
          faces: {
            required: false,
            serializedName: 'faces',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'FaceDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'FaceDescription'
                  }
              }
            }
          },
          requestId: {
            required: false,
            serializedName: 'requestId',
            type: {
              name: 'String'
            }
          },
          metadata: {
            required: false,
            serializedName: 'metadata',
            type: {
              name: 'Composite',
              className: 'ImageMetadata'
            }
          }
        }
      }
    };
  }
}

module.exports = ImageAnalysis;
