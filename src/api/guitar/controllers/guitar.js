'use strict';

/**
 * guitar controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::guitar.guitar');
