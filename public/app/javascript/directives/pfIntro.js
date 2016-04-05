(function() {
    'use strict';

    angular
        .module('Portfolio')
        .directive('pfIntro', pfIntro);

    /* @ngInject */
    function pfIntro() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'partials/portfolio/intro-text.html',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr) {
            jQuery(document).ready(typeFunc);

            function typeFunc() {
                scope.safeApply(function() {
                    var stringsArray = ['IT-products.', 'prototypes.', 'websites.', 'native applications.', 'meaningful experiences.', 'beautiful interactions.'];
                    jQuery('#typed').typed({
                        strings: stringsArray,
                        typeSpeed: 50,
                        startDelay: 1000,
                        backSpeed: 10,
                        backDelay: 1500,
                        loop: true,
                        showCursor: false
                    });
                });
            }
        }
    }
})();
