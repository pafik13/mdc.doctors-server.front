/**
 * DrugSKU.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var uuid = require("uuid");

/**
 * SKU препарата.
 * @namespace DrugSKU
 */
module.exports = {

  attributes: {
    /**
     * Уникальный идентификатор SKU
     * @memberof DrugSKU
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
     * Наименование SKU
     * @memberof DrugSKU
     * @type {object}
     */    
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    
    /**
     * Бренд
     * @memberof DrugSKU
     * @type {object}
     */    
    brand: {
      model: 'DrugBrand',
      required: true
    },
  },
  
  // Lifecycle Callbacks
  afterCreate: function (values, cb) {
    Agent.find().exec(function(err, agents) {
      if(err) return cb(err);
      
      agents.forEach(function(item, index, arr){
        var rec = {
          model: "DrugSKU",
          uuid: values.uuid,
          action: "create",
          agent: item.uuid
        };
        
        LifecycleAction.create(rec).exec(function (err, created){
          if (err) return sails.log(err);
        });
      });
      
      cb();
    });
  },
  
  afterUpdate: function (values, cb) {
    Agent.find().exec(function(err, agents) {
      if(err) return cb(err);
      
      agents.forEach(function(item, index, arr){
        var rec = {
          model: "DrugSKU",
          uuid: values.uuid,
          action: "update",
          agent: item.uuid
        };
        
        LifecycleAction.create(rec).exec(function (err, created){
          if (err) return sails.log(err);
        });
      });
      
      cb();
    });
  },
  
  afterDestroy: function (values, cb) {
    Agent.find().exec(function(err, agents) {
      if(err) return cb(err);
      
      agents.forEach(function(item, index, arr){
        var rec = {
          model: "DrugSKU",
          uuid: values.uuid,
          action: "delete",
          agent: item.uuid
        };
        
        LifecycleAction.create(rec).exec(function (err, created){
          if (err) return sails.log(err);
        });
      });
      
      cb();
    });
  },
  
};

