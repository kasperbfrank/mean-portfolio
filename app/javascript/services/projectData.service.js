(function() {
  'use strict';

  angular
    .module('Portfolio')
    .factory('projectData', projectData);

  projectData.$inject = ['$http'];

  /* @ngInject */
  function projectData($http) {
    var service = {
      all: getAll,
      getFirst: getFirst
    };

    return service;

    function getAll() {
      return $http({
        method: 'GET',
        url: 'data/projects.json'
      });
    }

    function getFirst() {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/contacts/1'
        });
    }
  }
})();
