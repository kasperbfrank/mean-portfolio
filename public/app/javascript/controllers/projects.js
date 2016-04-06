(function() {
    'use strict';

    angular
        .module('Portfolio')
        .controller('ProjectsController', ProjectsController);

    ProjectsController.$inject = ['projectData'];

    /* @ngInject */
    function ProjectsController(projectData) {
        var vm = this;
        vm.projects = [];

        activate();

        function activate() {
          getProjects();
        }

        function getProjects() {
            projectData.all().then(function(projects) {
                vm.projects = projects;
            }, function(reason) {
                console.log('failed: ' + reason);
            });
        }
    }
})();
