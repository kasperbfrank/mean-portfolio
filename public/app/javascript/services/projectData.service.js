(function() {
  'use strict';

  angular
    .module('Portfolio')
    .factory('projectData', projectData);

  projectData.$inject = ['$http', '$q'];

  /* @ngInject */
  function projectData($http, $q) {
    var service = {
      all: getAll,
      getProject: getProject,
      getGreetings: getGreetings
    //   getFirst: getFirst // rails api.
    };

    var dataPath = 'data/projects.json'

    return service;

    function getAll() {
        return $http({
            method: 'GET',
            url: dataPath
        });
    }

    function getProject(name) {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: dataPath
        }).success(function(projects) {
            for (var i = 0, x = projects.length; i < x; i++) {
                var project = projects[i];
                if (project.name === name) {
                    dfd.resolve(project);
              }
            }
        }, function(reason) {
            dfd.reject(reason)
        });
        return dfd.promise;
    }

    function getGreetings() {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: '/api/greetings'
        }).then(function(greetings) {
            dfd.resolve(greetings)
        }, function(reason) {
            dfd.reject(reason);
        });
        return dfd.promise;
    }

    // ----- EXPERIMENTAL RAILS API -----
    // function getFirst() {
    //     return $http({
    //         method: 'GET',
    //         url: 'http://localhost:3000/contacts/1'
    //     });
    // }
  }
})();
