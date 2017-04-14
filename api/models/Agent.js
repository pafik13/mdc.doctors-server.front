/**
 * Agent.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var uuid = require("uuid");
var ext = require('../extensions.js');

/**
 * Представитель/сотрудник.
 * @namespace Agent
 */
module.exports = {

  attributes: {
    /**
     * Уникальный идентификатор представителя/сотрудника. Используется Guid.
     * @memberof Agent
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
     * Имя представителя/сотрудника.
     * @memberof Agent
     * @type {object}
     */
    firstName: {
      type: 'string',
    //  required: true
    },

    /**
     * Отчество представителя/сотрудника.
     * @memberof Agent
     * @type {object}
     */    
    middleName: {
      type: 'string',
      // required: true      
    },

    /**
     * Фамилия представителя/сотрудника.
     * @memberof Agent
     * @type {object}
     */       
    lastName: {
      type: 'string',
      // required: true         
    },
    
    /**
     * Фамилия и инициалы
     * @memberof Agent
     * @type {object}
     */       
    shortName: {
      type: 'string',
      // required: true         
    },

    /**
     * Фамилия, имя и отчество
     * @memberof Agent
     * @type {object}
     */       
    fullName: {
      type: 'string',
      // required: true         
    },

    /**
     * Пол представителя/сотрудника.
     * @memberof Agent
     * @type {object}
     */     
    sex: {
      type: 'string',
      enum: ['Male', 'Female'],
      defaultsTo: 'Male'
    },
    
    /**
     * Дата приема на работу представителя/сотрудника.
     * @memberof Agent
     * @type {object}
     */  
    hireDate: {
      type: 'datetime'
    },

    /**
     * Дата рождения представителя/сотрудника.
     * @memberof Agent
     * @type {object}
     */      
    birthDate: {
      type: 'datetime'
    },
    
    /**
     * Почтовый адрес представителя/сотрудника.
     * @memberof Agent
     * @type {object}
     */         
    postAddress: {
      type: 'string'
    },
    
    /**
     * Контактный телефон представителя/сотрудника.
     * @memberof Agent
     * @type {object}
     */
    phone: {
      type: 'string'
    },
    
    /**
     * Электронная почта представителя/сотрудника.
     * @memberof Agent
     * @type {object}
     */
    email: {
      type: 'string'
    },

    /**
     * Город работы.
     * @memberof Agent
     * @type {object}
     */     
    city: {
      type: 'string'
    },

    /**
     * Количество недель в маршруте.
     * @memberof Agent
     * @type {object}
     */     
    weeksInRout: {
      type: 'integer'
    },

    /**
     * Режим работ.
     * @memberof Agent
     * @type {object}
     */      
    workMode: {
      model: 'WorkMode'
    },
    
    user: {
      model: 'User'
    }
  },
  
  // Lifecycle Callbacks
  beforeCreate: function(values, cb) {
    
    var newUser = {};
    newUser.username = ext.transliterate(values.lastName) + ext.getRandomInt(100, 999);
    newUser.password = ext.getRandomInt(1000, 9999);
    newUser.email = newUser.username + '@sbl-crm.ru';

    User.create(newUser, function(err, user) {
      if (err) {
          /* global sails */
          sails.log.error('beforeCreate - User.create - ' + err);
          cb(err);
          return false;
      }
      waterlock.engine.attachAuthToUser({
          email: newUser.email,
          password: newUser.password
      }, user, function(err, user) {
        if (err) {
          sails.log.error('beforeCreate - attachAuthToUser - ' + err);
          cb(err);
          return false;
        }
        sails.log.debug('Added user ' + user.id);
        // Now return JWT or perform other logic
        values.user = user.id;
        
        values.shortName = values.lastName;
        values.fullName = values.lastName;
      
        if (!!values.firstName) {
            values.shortName = values.shortName + " " + values.firstName.substring(0, 1) + ".";
            values.fullName = values.fullName + " " + values.firstName;
      
            if (!!values.middleName) {
                values.shortName = values.shortName + " " + values.middleName.substring(0, 1) + ".";
                values.fullName = values.fullName + " " + values.middleName;
            }
        }
      
        cb();
        
      });
    });
  },

  beforeUpdate: function(values, cb) {

    values.shortName = values.lastName;
    values.fullName = values.lastName;
  
    if (!!values.firstName) {
        values.shortName = values.shortName + " " + values.firstName.substring(0, 1) + ".";
        values.fullName = values.fullName + " " + values.firstName;
  
        if (!!values.middleName) {
            values.shortName = values.shortName + " " + values.middleName.substring(0, 1) + ".";
            values.fullName = values.fullName + " " + values.middleName;
        }
    }
  
    cb();
  }
};
