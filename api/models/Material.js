/**
 * Material.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var uuid = require("uuid");

/**
 * Матерал для показа на визите.
 * @namespace Material
 */
module.exports = {

  attributes: {
    /**
     * Уникальный идентификатор материала
     * @memberof Material
     * @type {object}
     */
    uuid: {
      type: 'string',
      required: true,
      primaryKey: true,
      unique: true,
      index: true,
      uuidv4: true,
      defaultsTo: function() {
        return uuid.v4();
      },
    },

    /**
     * Название материала
     * @memberof Material
     * @type {object}
     */    
    name: {
      type: 'string',
      required: true,
      unique: true
    },
  }
};

