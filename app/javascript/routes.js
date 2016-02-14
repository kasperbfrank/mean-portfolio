(function(){
  angular.module('Portfolio').config(function($routeProvider) {
    $routeProvider
      // .when('/', {
      //   redirectTo: '/portfolio'
      // })
      .when('/', {
        templateUrl: "partials/portfolio/index.html"
      })
      .when('/portfolio/:project', {
        templateUrl: "partials/portfolio/project/index.html",
        controller: "PortfolioProjectController",
        controllerAs: "pfProjectCtrl"
      })
  });
})();
