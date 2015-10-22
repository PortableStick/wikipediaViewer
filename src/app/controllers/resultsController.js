(function(){

	'use strict';

	angular.module('wikipediaViewer')
		.controller('ResultsController', ['getWiki', '$scope', '$routeParams', '$sce', function(getWiki, $scope, $routeParams, $sce){
			$scope.searchTerm = $routeParams.searchTerm;
			getWiki($scope.searchTerm).then(function(d){
				var results = d.data.query.search;
				$scope.results = results.map(function(x){
					return {
						title: x.title,
						snippet: $sce.getTrustedHtml($sce.trustAsHtml(x.snippet)) + '&hellip;',
						url: 'https://en.wikipedia.org/wiki/' + x.title
					}
				});
			});
		}]);

})();