(function(){

	'use strict';

	angular.module('wikipediaViewer')
		.controller('ResultsController', ['getWiki', '$scope', '$routeParams', '$sce', '$log', function(getWiki, $scope, $routeParams, $sce, $log){
			$scope.searchTerm = $routeParams.searchTerm;
			getWiki($scope.searchTerm).then(function(d){
				var results = d.data.query.search;
				$log.log(results);
				$scope.results = results.map(function(x){
					return {
						title: x.title,
						snippet: $sce.getTrustedHtml($sce.trustAsHtml(x.snippet)),
						url: 'https://en.wikipedia.org/wiki/' + x.title
					}
				});
				$log.log($scope.results)
			});
		}]);

})();