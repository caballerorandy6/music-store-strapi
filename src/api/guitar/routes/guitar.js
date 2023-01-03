'use strict';

/**
 * guitar router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::guitar.guitar');
