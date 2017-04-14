/**
 * ListedHospital.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var uuid = require("uuid");

/**
 * Больница из списка.
 * @namespace ListedHospital
 */
module.exports = {

  attributes: {
    /**
     * Уникальный идентификатор больницы
     * @memberof ListedHospital
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
     * Наименование больницы
     * @memberof ListedHospital
     * @type {object}
     */    
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    
    /**
     * Адрес больницы
     * @memberof ListedHospital
     * @type {object}
     */    
    address: {
      type: 'string',
      required: true,
    },

    /**
     * Широта
     * @memberof ListedHospital
     * @type {object}
     */      
    latitude: {
      type: 'float',
    },

    /**
     * Долгота
     * @memberof ListedHospital
     * @type {object}
     */      
    longitude: {
      type: 'float',
    },
  }
};

