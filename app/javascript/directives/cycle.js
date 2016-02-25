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
            // el.bind('mouseover', handleMouseover);
            // jQuery().bind('mouseleave', handleMouseleave);
            jQuery('.slideshow, #next, #prev').bind('mouseover', handleMouseover);
            jQuery('.slideshow').bind('mouseleave', handleMouseleave);

            $timeout(function(){
               $(el).cycle({
                   fx: 'fade',
                   swipe: true,
                   prev: jQuery('#prev'),
                   next: jQuery('#next'),
                   timeout: 4000,
                   nextEvent: console.log('next')
               });
           }, 0);

           function handleMouseover() {
               scope.safeApply(function() {
                   if (scope.isMousedOver == false || scope.isMousedOver == undefined) {
                       el.cycle('pause');
                       jQuery('#next').animate({
                           opacity: 1,
                           right: '0'
                       }, 200);
                       jQuery('#prev').animate({
                           opacity: 1,
                           left: '0'
                       }, 200);
                       scope.isMousedOver = true;
                   }
               });
           }

           function handleMouseleave() {
               scope.safeApply(function() {
                   el.cycle('resume');
                   jQuery('#next').animate({
                       opacity: 0,
                       right: '-20px'
                   }, 200);
                   jQuery('#prev').animate({
                       opacity: 0,
                       left: '-20px'
                   }, 200);
                   scope.isMousedOver = false;
               });
           }
	    }
    }
})();
