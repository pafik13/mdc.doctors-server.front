(function() {
  'use strict';

  angular
    .module('App')
    .controller('DrugBrandController', DrugBrandController);

    DrugBrandController.inject = ['$scope','dataService'];

    function DrugBrandController($scope, dataService) {
      var drugBrandCntrl = this;
      drugBrandCntrl.meta = {
        model: 'DrugBrand',
        key: 'uuid',
        refs: [],
        searches: ['name']
      };

      drugBrandCntrl.params = {
        //'manager': manager.id,
      };

      drugBrandCntrl.drugBrands = [];
      drugBrandCntrl.loaded = false;

      activate() ;
      
      function activate() {
        var config = {
          'params': {
            'populate': [],
          },
        };

        dataService.getList(drugBrandCntrl.meta.model, config)
          .then(function(data) {
            drugBrandCntrl.drugBrands = data;
            drugBrandCntrl.loaded = true;
            return drugBrandCntrl.drugBrands;
          });
      }
  }
})();