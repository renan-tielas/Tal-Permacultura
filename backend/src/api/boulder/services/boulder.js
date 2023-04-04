'use strict';

/**
 * boulder service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::boulder.boulder');
