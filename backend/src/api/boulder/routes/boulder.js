'use strict';

/**
 * boulder router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::boulder.boulder');
