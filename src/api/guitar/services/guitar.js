'use strict';

/**
 * guitar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::guitar.guitar');
