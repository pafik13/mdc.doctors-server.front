(function() {
  'use strict';

  angular
    .module('App')
    .controller('ListedHospitalController', ListedHospitalController);

    ListedHospitalController.inject = ['$scope','dataService'];

    function ListedHospitalController($scope, dataService) {
      var listedHospCntrl = this;
      listedHospCntrl.meta = {
        model: 'ListedHospital',
        key: 'uuid',
        refs: [],
        searches: ['name', 'address']
      };

      listedHospCntrl.params = {
        //'manager': manager.id,
      };

      listedHospCntrl.hospitals = [];
      listedHospCntrl.loaded = false;

      activate() ;
      
      function activate() {
        var config = {
          'params': {
          },
        };

        dataService.getList(listedHospCntrl.meta.model, config)
          .then(function(data) {
            listedHospCntrl.hospitals = data;
            listedHospCntrl.loaded = true;
            return listedHospCntrl.hospitals;
          });
      }
  }
})();