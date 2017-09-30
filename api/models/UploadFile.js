/**
 * UploadFile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
 
var uuid = require("uuid");
var ext = require('../extensions.js');

module.exports = {

  attributes: {
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
    
    name: {
      type: "string",
      required: true
    },
    
    fileName: {
      type: "string",
      required: true
    },
    
    s3Key: {
      type: "string",
      required: true
    },
    
    s3Bucket: {
      type: "string",
      required: true
    },
    
    s3Location: {
      type: "string",
      required: true
    }
  }
};

