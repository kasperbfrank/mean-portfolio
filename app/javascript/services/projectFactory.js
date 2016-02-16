(function() {
  'use strict';

  angular
    .module('Portfolio')
    .factory('projectFactory', projectFactory);

  projectFactory.$inject = ['$http'];

  /* @ngInject */
  function projectFactory($http) {
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
