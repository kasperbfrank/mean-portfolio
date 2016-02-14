(function() {
    'use strict';

    angular
        .module('Portfolio')
        .directive('pfProjects', pfProjects);

    /* @ngInject */
    function pfProjects() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'partials/portfolio/projects.html',
            controller: 'PortfolioIndexController',
            controllerAs: 'pfIndexCtrl'
        };

        return directive;
    }
})();
