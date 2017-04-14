(function() {
  'use strict';
  
  /* global angular */
  angular
    .module('App')
    .directive('datepicker', datepicker);

  function datepicker(){
    var directive = {
      restrict:'E',
      require: 'dpModel',
      scope:{
        dpElementId:    '@',
        dpModel:        '=',
        dpChange:       '&',
        dpPlaceholder:  '@',
      },
      templateUrl: '/templates/datepicker.html',
      controller: DatePickerController,
      controllerAs: 'dpCntrl',
    };

    return directive;
  }

  DatePickerController.$inject = ['$scope', '$element', '$filter'];

  function DatePickerController($scope, $element, $filter){
    
    $scope.$watch('dpModel', function(newVal, oldVal, scope) {
      if (scope.dpElementId.includes('upd')) {
        if (typeof newVal === 'undefined') {
          $element.find('.input-group.date').datepicker('setDate', newVal);
        } else {
          var dateStr = $filter('date')(newVal, "dd.MM.yyyy");
          $element.find('.input-group.date').datepicker('setDate', dateStr);
        }
      }
    });   
    
    
    $element.find('.input-group.date').datepicker({
        language: "ru",
    })
    .on('changeDate', function(e) {
        // `e` here contains the extra attributes
        console.log(e);
        
        if (typeof e.date === 'undefined' && typeof $scope.dpModel === 'undefined') {
          return;
        }
        
        if (typeof e.date === 'undefined') {
          $scope.dpModel = e.date;
        
          $scope.dpChange();
          
          //$scope.$apply();
          
          return;
        }
        
        if (typeof $scope.dpModel=== 'undefined') {
          $scope.dpModel = new Date(Date.UTC(e.date.getFullYear(), e.date.getMonth(), e.date.getDate()));
        
          $scope.dpChange();
          
          //$scope.$apply();
          return;
        }
        
        var newDate = new Date(Date.UTC(e.date.getFullYear(), e.date.getMonth(), e.date.getDate()));
        if (newDate.valueOf() !== $scope.dpModel.valueOf() ) {
          $scope.dpModel = newDate;
        
          $scope.dpChange();
          
          //$scope.$apply();
          return;
        }
    });
  }
})();