(function() {
  'use strict';

  angular
    .module('Portfolio')
    .controller('PortfolioProjectController', PortfolioProjectController);

  PortfolioProjectController.$inject = ['$scope', '$routeParams', 'projectFactory'];

  /* @ngInject */
  function PortfolioProjectController($scope, $routeParams, projectFactory) {
    var vm = this;
    vm.currentProject = {};

    // testVar to hold testdb variable
    vm.testVar = {};

    activate();

    function activate() {
      projectFactory.all().success(function(data) {
        for (var i = 0, x = data.length; i < x; i++) {
          var proj = data[i];
          if (proj.name === $routeParams.project) {
            vm.currentProject = proj;
          }
        }
      });

      projectFactory.getFirst().success(function(data) {
         vm.testVar = data;
      });
    }
  }
})();
