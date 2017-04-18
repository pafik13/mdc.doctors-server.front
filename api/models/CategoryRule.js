/**
 * CategoryRule.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
 
var uuid = require("uuid");

/**
 * Правило определения категории врача.
 * @namespace CategoryRule
 */
module.exports = {

  attributes: {
    
    /**
     * Уникальный идентификатор категории
     * @memberof CategoryRule
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
     * Название правила
     * @memberof CategoryRule
     * @type {object}
     */    
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    
    /**
     * Бренд
     * @memberof CategoryRule
     * @type {object}
     */    
    brand: {
      model: 'DrugBrand',
      required: true
    },

		potentialStart: {
		  type: "integer",
		  required: true
		},
		
		potentialEnd: {
		  type: "integer",
		  required: true
		},

		proportionStart: {
		  type: "float",
		  required: true		  
		},
		
		proportionEnd: {
		  type: "float",
		  required: true
		},
		
    /**
     * Категория
     * @memberof CategoryRule
     * @type {object}
     */    
    category: {
      model: 'Category',
      required: true
    },
    
  },
};

