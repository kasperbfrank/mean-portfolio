(function(){
  angular.module('Portfolio').config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "partials/portfolio/index.html",
        controller: 'ProjectsController',
        controllerAs: 'projects'
      })
      .when('/portfolio/:project', {
        templateUrl: "partials/portfolio/project/index.html",
        controller: "ProjectDetailController",
        controllerAs: "project"
       });
  });
})();
