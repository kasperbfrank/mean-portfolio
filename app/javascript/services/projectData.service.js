(function() {
  'use strict';

  angular
    .module('Portfolio')
    .factory('projectData', projectData);

  projectData.$inject = ['$http'];

  /* @ngInject */
  function projectData($http) {
    var service = {
      all: getAll
    //   getFirst: getFirst // rails api.
    };

    return service;

    function getAll() {
      return $http({
        method: 'GET',
        url: 'data/projects.json'
      });
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
