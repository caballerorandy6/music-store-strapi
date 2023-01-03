'use strict';

/**
 * trumpet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trumpet.trumpet');
