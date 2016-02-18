(function() {
    'use strict';

    angular
        .module('Portfolio')
        .directive('pfLoad', pfLoad);

    /* @ngInject */
    function pfLoad() {
        var directive = {
            restrict: 'A',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr) {
            // jQuery(document).ready(handleLoadComplete);
            //
            // function handleLoadComplete() {
            //     scope.safeApply(function() {
            //         console.log('nice');
            //         jQuery('#load-container').addClass('animated fadeOut');
            //     });
            // }
            scope.$on('cfpLoadingBar:completed', handleLoadComplete);

            function handleLoadComplete() {
                scope.safeApply(function() {
                    jQuery('#load-overlay').addClass('animated fadeOut');
                });
            }
        }
    }
})();
