(function(){
  'use strict';

  // Declare app level module which depends on views, and components
  angular
    .module('Portfolio', [
      'ngRoute',
      'angular-loading-bar',
      'ngAnimate',
      'anguvideo'
    ])
    .config(_configApply);

    _configApply.$inject = ['$provide'];

    function _configApply($provide) {
    return $provide.decorator('$rootScope', [
      '$delegate', function($delegate) {
        $delegate.safeApply = function(fn) {
          var phase = $delegate.$$phase;
          if (phase === "$apply" || phase === "$digest") {
            if (fn && typeof fn === 'function') {
              fn();
            }
          } else {
            $delegate.$apply(fn);
          }
        };
        return $delegate;
      }
    ]);
  }
})();
