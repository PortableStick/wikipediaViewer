(function() {
  'use strict';

  angular
    .module('wikipediaViewer')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/partials/searchBar.html'
      })
      .when('/:searchTerm', {
        templateUrl: 'app/partials/resultsPage.html',
        controller: 'ResultsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
