/**
 * CategoryController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var _ = require("lodash");

module.exports = {

  bynetoptions: function(req, res) {
    var result = [];
    
    Category.find({type:'net'}).exec(function (err, categories){
      if (err) {
        return res.negotiate(err);
      }
      sails.log('Wow, there are %d category(s)', categories.length);
      _.each(categories, function (category) {
        result.push({lk_option : category.name, lk_value: category.uuid});
      });
      
      res.set({
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': 'http://report-sblcrm.rhcloud.com' 
      });
      return res.send(200, JSON.stringify(result));
    });
  },
  
  byselloptions: function(req, res) {
    var result = [];
    
    Category.find({type:'sell'}).exec(function (err, categories){
      if (err) {
        return res.negotiate(err);
      }
      sails.log('Wow, there are %d category(s)', categories.length);
      _.each(categories, function (category) {
        result.push({lk_option : category.name, lk_value: category.uuid});
      });
      
      res.set({
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': 'http://report-sblcrm.rhcloud.com' 
      });
      return res.send(200, JSON.stringify(result));
    });
  }
	
};

