/**
 * Position.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var uuid = require("uuid");

/**
 * Должность.
 * @namespace Position
 */
module.exports = {

  attributes: {
    /**
     * Уникальный идентификатор должности
     * @memberof Position
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
     * Наименование должности
     * @memberof Position
     * @type {object}
     */    
    name: {
      type: 'string',
      required: true,
      unique: true
    },
  },
  
  // Lifecycle Callbacks
  afterCreate: function (values, cb) {
    Agent.find().exec(function(err, agents) {
      if(err) return cb(err);
      
      agents.forEach(function(item, index, arr){
        var rec = {
          model: "Position",
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
          model: "Position",
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
          model: "Position",
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

