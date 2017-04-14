/**
 * WorkMode.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * Режим работы.
 * @namespace WorkMode
 */
module.exports = {

  attributes: {
    
    /**
     * Ключевое значение.
     * @memberof WorkMode
     * @type {object}
     */
    id: {
      type: 'string',
      primaryKey: true,
      required: true,
      enum: ['wmOnlyRoute', 'wmRouteAndRecommendations', 'wmOnlyRecommendations']
    },

    /**
     * Наименование
     * @memberof WorkMode
     * @type {object}
     */    
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    
  }
};

