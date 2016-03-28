(function(){
  angular.module('Portfolio').config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "partials/portfolio/index.html",
        controller: 'PortfolioIndexController',
        controllerAs: 'pfIndexCtrl'
      })
      .when('/portfolio/:project', {
        templateUrl: "partials/portfolio/project/index.html",
        controller: "PortfolioProjectController",
        controllerAs: "pfProjectCtrl"
       });
  });
})();
