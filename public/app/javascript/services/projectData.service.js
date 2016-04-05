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
      getProject: getProject
    };

    var apiBasePath = 'api/projects'

    return service;

    function getAll() {
        return query('GET', apiBasePath);
    }

    function getProject(name) {
        var url = apiBasePath + '/' + name;
        return query('GET', url);
    }

    function query(method, url) {
        var dfd = $q.defer();
        $http({
            method: method,
            url: url
        }).then(function(result) {
            dfd.resolve(result.data);
        }, function(reason) {
            dfd.reject(reason);
        });
        return dfd.promise;
    }
  }
})();
