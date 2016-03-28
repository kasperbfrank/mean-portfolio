(function() {
    'use strict';

    angular
        .module('Portfolio')
        .controller('PortfolioIndexController', PortfolioIndexController);

    PortfolioIndexController.$inject = ['$scope','$window' ,'projectData'];

    /* @ngInject */
    function PortfolioIndexController($scope, $window, projectData) {
        var vm = this;
        vm.projects = [];

        activate();

        function activate() {
          getProjects();
        }

        function getProjects() {
          projectData.all().success(function(data) {
            vm.projects = data;
          });
        }
    }
})();
