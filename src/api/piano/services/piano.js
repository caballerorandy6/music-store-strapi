'use strict';

/**
 * piano service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::piano.piano');
