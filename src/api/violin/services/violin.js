'use strict';

/**
 * violin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::violin.violin');
