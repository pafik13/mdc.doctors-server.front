(function() {
  'use strict';

  angular
    .module('App')
    .controller('PositionController', PositionController);

    PositionController.inject = ['$scope','dataService'];

    function PositionController($scope, dataService) {
      var positionCntrl = this;
      positionCntrl.meta = {
        model: 'Position',
        key: 'uuid',
        refs: [],
        searches: ['name']
      };

      positionCntrl.params = {
        //'manager': manager.id,
      };

      positionCntrl.positions = [];
      positionCntrl.loaded = false;

      activate() ;
      
      function activate() {
        var config = {
          'params': {
          },
        };

        dataService.getList(positionCntrl.meta.model, config)
          .then(function(data) {
            positionCntrl.positions = data;
            positionCntrl.loaded = true;
            return positionCntrl.positions;
          });
      }
  }
})();