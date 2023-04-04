'use strict';

/**
 * boulder controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::boulder.boulder');
