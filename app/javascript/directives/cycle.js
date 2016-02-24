(function() {
    'use strict';

    angular
        .module('Portfolio')
        .directive('cycle', cycle);

    /* @ngInject */
    function cycle($timeout) {
        var directive = {
            restrict: 'A',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {
            $timeout(function(){
               $(el).cycle({
                   fx: 'fade',
                   swipe: true,
                   pauseOnHover: true,
                   timeout: 8000
               });
           }, 0);
	    }
    }
})();
