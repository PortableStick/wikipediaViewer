(function(){

	'use strict';

	angular.module('wikipediaViewer')
		.controller('SearchController', ['getRandomWiki', '$scope', '$log',function(getRandomWiki, $scope, $log){
			getRandomWiki().then(function(d){
				$scope.randomWiki = 'https://www.wikipedia.org/wiki/' + d.data.query.random[0].title;
				$log.log($scope.randomWiki);
			});
		}]);

})();