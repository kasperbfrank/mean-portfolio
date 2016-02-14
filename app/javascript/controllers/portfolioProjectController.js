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

    activate();

    function activate() {
      projectFactory.all().success(function(data) {
        console.log("promise succeeded");
        for (var i = 0, x = data.length; i < x; i++) {
          var proj = data[i];
          console.log(proj);
          console.log($routeParams.project);
          if (proj.name === $routeParams.project) {
            vm.currentProject = proj;
          }
        }
      });
    }
  }
})();
