(function(){
  angular.module('Portfolio').controller('PortfolioProjectController', function(Project, $scope, $routeParams) {
    Project.all().success(function(data) {
      for (var i = 0, x = data.length; i < x; i++) {
        var proj = data[i];
        if (proj.name === $routeParams.project) {
          $scope.currentProject = proj;
        }
      }
    });
  });
})();
