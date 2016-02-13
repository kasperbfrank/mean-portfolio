(function(){
  angular.module('Portfolio').config(function($routeProvider) {
    $routeProvider
      // .when('/', {
      //   redirectTo: '/portfolio'
      // })
      .when('/', {
        templateUrl: "partials/portfolio/index.html",
        controller: "PortfolioIndexController"
      })
      .when('/portfolio/:project', {
        templateUrl: "partials/portfolio/project.html",
        controller: "PortfolioProjectController"
      })
  });
})();
