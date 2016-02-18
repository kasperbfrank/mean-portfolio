(function() {
    'use strict';

    angular
        .module('Portfolio')
        .controller('PortfolioIndexController', PortfolioIndexController);

    PortfolioIndexController.$inject = ['$scope','$window' , 'projectFactory'];

    /* @ngInject */
    function PortfolioIndexController($scope, $window, projectFactory) {
        var vm = this;
        vm.projects = [];

        activate();

        function activate() {
          getProjects();
        }

        function getProjects() {
          projectFactory.all().success(function(data) {
            vm.projects = data;
          });
        }

        $scope.$on('$locationChangeStart', function() {
            jQuery('#load-overlay').css('opacity', '1');
            jQuery('#load-overlay-white').css('opacity', '1');
            $window.scrollTo(0, 0);
        });
    }
})();
