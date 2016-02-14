(function() {
    'use strict';

    angular
        .module('Portfolio')
        .controller('PortfolioIndexController', PortfolioIndexController);

    PortfolioIndexController.$inject = ['$scope', 'projectFactory'];

    /* @ngInject */
    function PortfolioIndexController($scope, projectFactory) {
        var vm = this;
        vm.projects = [];
        vm.scrollToProjects = function() {
          jQuery('html, body').animate({
            scrollTop: jQuery('.projects').offset().top
          }, 750, 'swing');
        };

        activate();

        function activate() {
          jQuery(window)
          .on('scroll', scrollHandler)
          .on('resize', scrollHandler);
          getProjects();
        }

        function getProjects() {
          projectFactory.all().success(function(data) {
            vm.projects = data;
          });
        }

        function scrollHandler() {
          var img = jQuery('.project-image');
          if (isScrolledIntoView(img.first())) {
            img.each(function(i) {
              jQuery(this).delay(i * 200).animate({
                opacity: 1,
                top: '0px'
              }, 400);
            });
          }

          if (isScrolledIntoView(jQuery('.about-header'))) {
            jQuery('.about-content').delay(200).animate({
              opacity: 1,
              top: '0px'
            }, 500);
          }
        }

        function isScrolledIntoView(elem) {
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
})();
