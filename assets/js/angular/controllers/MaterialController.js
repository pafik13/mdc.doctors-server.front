(function() {
  'use strict';

  angular
    .module('App')
    .controller('MaterialController', MaterialController);

    MaterialController.inject = ['$scope','dataService'];

    function MaterialController($scope, dataService) {
      var materialCntrl = this;
      materialCntrl.meta = {
        model: 'Material',
        key: 'uuid',
        refs: [],
        searches: ['name']
      };

      materialCntrl.params = {
        //'manager': manager.id,
      };

      materialCntrl.materials = [];
      materialCntrl.loaded = false;

      activate() ;
      
      function activate() {
        var config = {
          'params': {
          },
        };

        dataService.getList(materialCntrl.meta.model, config)
          .then(function(data) {
            materialCntrl.materials = data;
            materialCntrl.loaded = true;
            return materialCntrl.materials;
          });
      }
  }
})();