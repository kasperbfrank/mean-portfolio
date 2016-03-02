(function() {
    'use strict';

    angular
        .module('Portfolio')
        .directive('pfProjects', pfProjects);

    /* @ngInject */
    function pfProjects($location) {
        var directive = {
            restrict: 'EA',
            templateUrl: 'partials/portfolio/projects.html',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr) {
            scope.goToProject = function(projectName) {
                $location.path('/portfolio/' + projectName);
                // console.log('click');
            }
        }
    }
})();
