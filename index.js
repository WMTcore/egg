'use strict';

/**
 * @namespace Egg
 */

/**
 * @member {Application} Egg#Application
 * @since 1.0.0
 */
exports.Application = require('./lib/application');

/**
 * @member {AppWorkerLoader} Egg#AppWorkerLoader
 * @since 1.0.0
 */
exports.AppWorkerLoader = require('./lib/loader').AppWorkerLoader;


/**
 * @member {Controller} Egg#Controller
 * @since 1.1.0
 */
exports.Controller = require('./lib/core/base_context_class');

/**
 * @member {Service} Egg#Service
 * @since 1.1.0
 */
exports.Service = require('./lib/core/base_context_class');

/**
 * @member {Subscription} Egg#Subscription
 * @since 1.10.0
 */
exports.Subscription = require('./lib/core/base_context_class');

/**
 * @member {BaseContextClass} Egg#BaseContextClass
 * @since 1.2.0
 */
exports.BaseContextClass = require('./lib/core/base_context_class');
