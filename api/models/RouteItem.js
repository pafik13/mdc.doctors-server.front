/**
 * RouteItem.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    /**
     * Кто залил на сервер
     * @memberof RouteItem
     * @type {object}
     */
    uploadedBy: {
      model: 'User',
      required: true
    },
    
  }
};

