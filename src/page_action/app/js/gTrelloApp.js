'use strict';

var gTrelloApp = angular.module('gTrelloApp', ['ngMaterial','ngRoute']);

gTrelloApp.config(function($compileProvider) {
   $compileProvider.aHrefSanitizationWhitelist (/^\s*(chrome-extension):/);
});

gTrelloApp.config(['$routeProvider', function($routeProvider){
	var templateFolder = "/src/page_action/app/templates/";
	$routeProvider
		.when("/", {
			templateUrl: templateFolder + 'main.html'
		})
		.when("/boards", {
			templateUrl: templateFolder + 'boards.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

gTrelloApp
	.config(['$httpProvider', function($httpProvider) {
		delete $httpProvider.defaults.headers.common["X-Requested-With"]
	}]).filter('encodeURIComponent', function() {
		return window.encodeURIComponent;
	}).service('TrelloNg', [ '$q', '$rootScope', function($q, $rootScope){

		var TrelloNg = {};

		// wrap Trello queries in angular promise
		TrelloNg.query = function(entity_name) { // success
			var deferred = $q.defer();
			Trello.get(entity_name, function(data) {
				// wrap call to resolve in $apply as this function is out of the main event loop
				$rootScope.$apply(function() {
					deferred.resolve(data);
				});
			}, function(response) { // error
				$rootScope.$apply(function() {
					deferred.reject(response);
				});
			});

			return deferred.promise;
		};

		return TrelloNg;
	}]);