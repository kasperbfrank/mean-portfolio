(function(){
  angular.module('Portfolio').config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "partials/portfolio/index.html",
        controller: 'ProjectsController',
        controllerAs: 'pfIndexCtrl'
      })
      .when('/portfolio/:project', {
        templateUrl: "partials/portfolio/project/index.html",
        controller: "ProjectDetailController",
        controllerAs: "pfProjectCtrl"
       });
  });
})();
