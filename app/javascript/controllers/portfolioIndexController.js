(function() {
    'use strict';

    angular
        .module('Portfolio')
        .controller('PortfolioIndexController', PortfolioIndexController);

    PortfolioIndexController.$inject = ['projectFactory'];

    /* @ngInject */
    function PortfolioIndexController(projectFactory) {
        var vm = this;
        vm.projects = [];

        activate();

        function activate() {
          getProjects();
        }

        function getProjects() {
          projectFactory.all().success(function(data) {
            vm.projects = data;
          });
        }
    }
})();
