var gTrelloApp = angular.module('gTrelloApp', ['ngMaterial','ngRoute']);

gTrelloApp.config(function($compileProvider) {
   $compileProvider.aHrefSanitizationWhitelist (/^\s*(chrome-extension):/);
});

gTrelloApp.config(['$routeProvider', function($routeProvider){
	var templateFolder = "/src/page_action/app/templates/";
	$routeProvider
		.when("/boards", {
			templateUrl: templateFolder + 'boards.html'
		})
    //.when("/lists/:boardId", {
    .when("/lists", {
			templateUrl: templateFolder + 'lists.html'
		})
		.otherwise({
			templateUrl: templateFolder + 'test.html'
		});
}]);
