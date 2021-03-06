(function() {
  'use strict';
  
  /* global angular */
  angular
    .module('App')
    .directive('popover', popover);

  function popover(){
    var directive = {
      restrict:'E',
      scope:{
        poTitle:    '@',
        poContent:  '@',
        isHtml:     '@',
        btnClass:   '@',
        btnIcon:    '@',
        btnContent: '@',
      },
      templateUrl: '/templates/popover.html',
      controller: PopOverController,
      controllerAs: 'poCntrl',
      bindToController: true // because the scope is isolated
    };

    return directive;
  };

  PopOverController.$inject = [];

  function PopOverController(){
    $('[data-toggle="popover"]').popover();
    $('body').on('click', function (e) {
      $('[data-toggle="popover"]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
          $(this).popover('hide');
        }
      });
      $('body').on('hidden.bs.popover', function (e) {
        $(e.target).data("bs.popover").inState = { click: false, hover: false, focus: false }
      });
    });
  }
})();