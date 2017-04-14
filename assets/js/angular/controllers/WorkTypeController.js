(function() {
  'use strict';

  angular
    .module('App')
    .controller('WorkTypeController', WorkTypeController);

    WorkTypeController.inject = ['$scope','dataService'];

    function WorkTypeController($scope, dataService) {
      var workTypeCntrl = this;
      workTypeCntrl.meta = {
        model: 'WorkType',
        key: 'uuid',
        refs: [],
        searches: ['name']
      };

      workTypeCntrl.params = {
        //'manager': manager.id,
      };

      workTypeCntrl.worktypes = [];
      workTypeCntrl.loaded = false;

      activate() ;
      
      function activate() {
        var config = {
          'params': {
          },
        };

        dataService.getList(workTypeCntrl.meta.model, config)
          .then(function(data) {
            workTypeCntrl.worktypes = data;
            workTypeCntrl.loaded = true;
            return workTypeCntrl.worktypes;
          });
      }
  }
})();