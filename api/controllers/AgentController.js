/**
 * AgentController
 *
 * @description :: Server-side logic for managing Agents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

/* global sails, Agent */
module.exports = {
	
  byjwt: function(req, res) {
    Agent.findOne({
        user: req.session.user.id
    }).exec(function (err, agent){
      if (err) {
        return res.serverError(err);
      }
      if (!agent) {
        return res.notFound('Could not find Agent with user id=' + req.user.id + ', sorry.');
      }
        
      sails.log('Found "%s"', agent.fullName);
      return res.json(agent);
    });
  },
	
};

