(function() {
    'use strict';

    angular
        .module('Portfolio')
        .directive('scroll', scroll);

    /* @ngInject */
    function scroll($window) {
        var directive = {
            restrict: 'A',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr) {
            angular.element($window)
            .bind('scroll', scrollHandler)
            .bind('resize', scrollHandler);

            function scrollHandler(event) {
                scope.safeApply(function() {
                    var img = jQuery('.project-image');
                    if (_isScrolledIntoView(img.first())) {
                        img.each(function(i) {
                            var offset = '50px';
                            console.log(jQuery(window).width());
                            if ((i % 2) && angular.element($window).width() > 991) {
                                offset = '0px';
                            }
                            jQuery(this).css({ top: offset }).delay(i * 200).animate({
                                opacity: 1
                            }, 400);
                        });
                    };

                    if (_isScrolledIntoView(jQuery('.about-header'))) {
                        jQuery('.about-left').animate({
                            opacity: 1,
                            left: '0'
                        }, 500);
                        jQuery('.about-right').animate({
                            opacity: 1,
                            right: '0'
                        }, 500, animateExtraInfo);
                    }
                    function animateExtraInfo() {
                        var extraInfoPartContainer = jQuery('.extra-info-part-container');
                        extraInfoPartContainer.each(function(i) {
                            jQuery(this).delay(i * 500).animate({
                                opacity: 1
                            }, 500);
                        });
                    }
                });
            }

            function _isScrolledIntoView(elem) {
                if (elem.length) {
                    var w = jQuery(window);

                    var docViewTop = w.scrollTop();
                    var docViewBottom = docViewTop + w.height();

                    var elemTop = elem.offset().top;
                    var elemBottom = elemTop + elem.height();

                    return (elemBottom <= docViewBottom);
                }
            }
        }
    }
})();
