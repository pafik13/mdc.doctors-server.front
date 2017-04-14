(function() {
  'use strict';

  angular
    .module('App')
    .controller('AgentController', AgentController);

    AgentController.inject = ['$scope','dataService'];

    function AgentController($scope, dataService) {
      var agentCntrl = this;
      agentCntrl.meta = {
        model: 'Agent',
        key: 'uuid',
        refs: [ { modelAttr: 'workMode',
                  refModel: 'WorkMode',
                  refAttr: 'workmodes'
                },
                { modelAttr: 'user',
                  refModel: 'User',
                  refAttr: 'user'
                },
              ],
        searches: ['fullName', 'phone', 'postAddress']
      };

      agentCntrl.params = {
        //'manager': manager.id,
      };

      agentCntrl.agents = [];
      agentCntrl.loaded = false;

      activate() ;
      
      function activate() {
        var config = {
          'params': {
            //'manager': manager.id,
            //'populate': ['user'],
          },
        };

        dataService.getList(agentCntrl.meta.model, config)
          .then(function(data) {
            agentCntrl.agents = data;
            agentCntrl.loaded = true;
            return agentCntrl.agents;
          });
      }
  }
})();