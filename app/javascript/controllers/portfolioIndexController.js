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
            // $window.scrollTo(0, 0); // attempt to make sure window would be at (0, 0) when going back from project. Sort of worked - but not on phones in portrait mode.
            jQuery('#load-overlay').css('opacity', '1');
            jQuery('#load-overlay-white').css('opacity', '1');
        });
    }
})();
