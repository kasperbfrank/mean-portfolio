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
          getGreetings();
        }

        function getProjects() {
          projectData.all().success(function(data) {
            vm.projects = data;
          });
        }

        function getGreetings() {
            // projectData.getGreetings().success(function(greetings) {
            //     console.log(greetings);
            // });
            console.log(projectData.getGreetings());
        }
    }
})();
