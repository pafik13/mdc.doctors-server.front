(function() {
  'use strict';

  angular
    .module('App')
    .controller('DrugSKUController', DrugSKUController);

    DrugSKUController.inject = ['$scope','dataService'];

    function DrugSKUController($scope, dataService) {
      var drugSKUCntrl = this;
      drugSKUCntrl.meta = {
        model: 'DrugSKU',
        key: 'uuid',
        refs: [ { modelAttr: 'brand',
                  refModel: 'DrugBrand',
                  refAttr: 'brands'
                },],
        searches: ['name', 'brand.name']
      };

      drugSKUCntrl.params = {
        //'manager': manager.id,
      };

      drugSKUCntrl.drugSKUs = [];
      drugSKUCntrl.loaded = false;

      activate() ;
      
      function activate() {
        var config = {
          'params': {
            'populate': ['brand'],
          },
        };

        dataService.getList(drugSKUCntrl.meta.model, config)
          .then(function(data) {
            drugSKUCntrl.drugSKUs = data;
            drugSKUCntrl.loaded = true;
            return drugSKUCntrl.drugSKUs;
          });
      }
  }
})();