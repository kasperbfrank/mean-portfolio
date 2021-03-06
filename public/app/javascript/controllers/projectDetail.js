(function() {
  'use strict';

  angular
    .module('Portfolio')
    .controller('ProjectDetailController', ProjectDetailController);

  ProjectDetailController.$inject = ['$routeParams', 'projectData'];

  /* @ngInject */
  function ProjectDetailController($routeParams, projectData) {
    var vm = this;
    vm.currentProject = {};

    activate();

    function activate() {
        getProject($routeParams.project);
    }

    function getProject(name) {
        projectData.getProject(name).then(function(project) {
            vm.currentProject = project;
        }, function(reason) {
            console.log('failed: ' + reason);
        });
    }
  }
})();
