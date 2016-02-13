(function(){
  angular.module('Portfolio').factory('Project', function ProjectFactory($http) {
    return {
      all: function() {
        return $http({
          method: "GET",
          url: "data/projects.json"
        })
      }
    };
  });
})();
