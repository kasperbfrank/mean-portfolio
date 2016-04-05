(function() {
    'use strict';

    angular
        .module('Portfolio')
        .controller('ProjectsController', ProjectsController);

    ProjectsController.$inject = ['$scope','$window' ,'projectData'];

    /* @ngInject */
    function ProjectsController($scope, $window, projectData) {
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
