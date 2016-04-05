(function() {
    'use strict';

    angular
        .module('Portfolio')
        .directive('pfLoad', pfLoad);

    /* @ngInject */
    function pfLoad($window) {
        var directive = {
            restrict: 'A',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr) {
            scope.$on('cfpLoadingBar:completed', handleLoadComplete);

            function handleLoadComplete() {
                scope.safeApply(function() {
                    el.addClass('animated fadeOut');
                    $window.scrollTo(0, 0);
                });
            }
        }
    }
})();
