(function() {
  'use strict';

  angular
    .module('Portfolio')
    .factory('projectFactory', projectFactory);

  projectFactory.$inject = ['$http'];

  /* @ngInject */
  function projectFactory($http) {
    var service = {
      all: getAll
    };

    return service;

    function getAll() {
      return $http({
        method: 'GET',
        url: 'data/projects.json'
      });
    }
  }
})();
