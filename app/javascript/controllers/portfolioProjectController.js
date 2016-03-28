(function() {
  'use strict';

  angular
    .module('Portfolio')
    .controller('PortfolioProjectController', PortfolioProjectController);

  PortfolioProjectController.$inject = ['$scope', '$routeParams', 'projectData'];

  /* @ngInject */
  function PortfolioProjectController($scope, $routeParams, projectData) {
    var vm = this;
    vm.currentProject = {};

    activate();

    function activate() {
      projectData.all().success(function(data) {
        for (var i = 0, x = data.length; i < x; i++) {
          var proj = data[i];
          if (proj.name === $routeParams.project) {
            vm.currentProject = proj;
          }
        }
      });
    }
  }
})();
