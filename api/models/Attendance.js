/**
 * Attendance.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * Вид работы на визите.
 * @namespace Attendance
 */
module.exports = {

  attributes: {

    /**
     * Кто залил на сервер
     * @memberof Attendance
     * @type {object}
     */
    uploadedBy: {
      model: 'User',
      required: true
    },

  },
  
  // // Lifecycle Callbacks
  // beforeCreate: function(values, cb) {
  //   delete values.access_token;
  //   cb();
  // },
  
};

