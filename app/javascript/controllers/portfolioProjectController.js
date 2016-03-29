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
        projectData.getProject($routeParams.project).then(function(project) {
            vm.currentProject = project;
        }, function(reason) {
            console.log('failed: ' + reason);
        });
    }
  }
})();
