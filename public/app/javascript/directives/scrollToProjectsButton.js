(function() {
    'use strict';

    angular
        .module('Portfolio')
        .directive('scrollToProjectsButton', scrollToProjectsButton);

    /* @ngInject */
    function scrollToProjectsButton() {
        var directive = {
            restrict: 'EA',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr) {
            el.bind('click', clickHandler);

            function clickHandler(event) {
                scope.safeApply(function() {
                    jQuery('html, body').animate({
                        scrollTop: jQuery('.projects-container').offset().top
                    }, 750, 'swing');
                });
            }
        }
    }
})();
