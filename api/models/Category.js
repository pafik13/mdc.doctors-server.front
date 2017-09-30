/**
 * Category.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var uuid = require("uuid");

/**
 * Категория врача.
 * @namespace Category
 */
module.exports = {
  /* global sails, LifecycleAction, Agent */
  attributes: {
    /**
     * Уникальный идентификатор категории
     * @memberof Category
     * @type {object}
     */
    uuid: {
      type: 'string',
      required: true,
      primaryKey: true,
      unique: true,
      index: true,
      // uuidv4: true,
      enum: ['cFirst', 'cSecond', 'cThird', 'cForth', 'cFifth'],
      // defaultsTo: function() {
      //   return uuid.v4();
      // },
    },

    /**
     * Название категории
     * @memberof Category
     * @type {object}
     */    
    name: {
      type: 'string',
      required: true,
      unique: true
    }
  },
  
  // Lifecycle Callbacks
  afterCreate: function (values, cb) {
    Agent.find().exec(function(err, agents) {
      if(err) return cb(err);
      
      agents.forEach(function(item, index, arr){
        var rec = {
          model: "Category",
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
          model: "Category",
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
          model: "Category",
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
  }
  
};

