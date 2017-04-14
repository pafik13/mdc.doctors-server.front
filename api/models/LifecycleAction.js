/**
 * LifecycleAction.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * Действие над объектом.
 * @namespace LifecycleAction
 */
module.exports = {

  attributes: {
    
    /**
     * Модель
     * @memberof LifecycleAction
     * @type {object}
     */    
    model: {
      type: 'string',
      required: true,
    },
    
    /**
     * Идентификатор
     * @memberof LifecycleAction
     * @type {object}
     */    
    uuid: {
      type: 'string',
      required: true,
      uuidv4: true
    },
    
    /**
     * Действие
     * @memberof LifecycleAction
     * @type {object}
     */    
    action: {
      type: 'string',
      required: true,
    },
    
    /**
     * Представитель
     * @memberof LifecycleAction
     * @type {object}
     */    
    agent: {
      model: 'Agent',
      required: true
    },
    
  }
  
};

