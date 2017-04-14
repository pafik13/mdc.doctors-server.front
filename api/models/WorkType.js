/**
 * WorkType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var uuid = require("uuid");

/**
 * Вид работы на визите.
 * @namespace WorkType
 */
module.exports = {

  attributes: {
    /**
     * Уникальный идентификатор вида работы
     * @memberof WorkType
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
     * Название вида работы
     * @memberof WorkType
     * @type {object}
     */    
    name: {
      type: 'string',
      required: true
    },
    
    /**
     * Кто залил на сервер
     * @memberof WorkType
     * @type {object}
     */
    uploadedBy: {
      model: 'User'
    },
    
  },
  
  // Lifecycle Callbacks
  afterCreate: function (values, cb) {
    Agent.find().exec(function(err, agents) {
      if(err) return cb(err);
      
      agents.forEach(function(item, index, arr){
        var rec = {
          model: "WorkType",
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
          model: "WorkType",
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
          model: "WorkType",
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

