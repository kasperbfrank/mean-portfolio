(function(){
  angular.module('Portfolio').controller('PortfolioIndexController', function($scope, Project) {
    Project.all().success(function(data) {
      $scope.projects = data;
    });

    $scope.scrollToProjects = function() {
      $('html, body').animate({
        scrollTop: $('.projects').offset().top
      }, 750, 'swing');
    };

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
      var $img = $('.project-image');
      if (isScrolledIntoView($img.first())) {
        $img.each(function(i) {
          $(this).delay(i * 200).animate({
            opacity: 1,
            top: '0px'
          }, 400);
        });
      }

      if (isScrolledIntoView($('.about-header'))) {
        $('.about-content').delay(200).animate({
          opacity: 1,
          top: '0px'
        }, 500);
      }
    });

    function isScrolledIntoView(elem) {
      if (elem.length) {
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = elem.offset().top;
        var elemBottom = elemTop + elem.height();

        return (elemBottom <= docViewBottom);
      }
    }
  });
})();
