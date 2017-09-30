(function() {
  'use strict';

  angular
    .module('App')
    .controller('CategoryRuleController', CategoryRuleController);

    CategoryRuleController.inject = ['$scope','dataService'];

    function CategoryRuleController($scope, dataService) {
      var categoryRuleCntrl = this;
      categoryRuleCntrl.meta = {
        model: 'CategoryRule',
        key: 'uuid',
        refs: [ { modelAttr: 'brand',
                  refModel: 'DrugBrand',
                  refAttr: 'brands'
                },
                {
                  modelAttr: 'category',
                  refModel: 'Category',
                  refAttr: 'categories'
                }],
        searches: ['name', 'brand.name', 'category.name']
      };

      categoryRuleCntrl.params = {
        //'manager': manager.id,
      };

      categoryRuleCntrl.categoryRules = [];
      categoryRuleCntrl.loaded = false;

      activate() ;
      
      function activate() {
        var config = {
          'params': {
            'populate': ['brand', 'category'],
          },
        };

        dataService.getList(categoryRuleCntrl.meta.model, config)
          .then(function(data) {
            categoryRuleCntrl.categoryRules = data;
            categoryRuleCntrl.loaded = true;
            return categoryRuleCntrl.categoryRules;
          });
      }
  }
})();