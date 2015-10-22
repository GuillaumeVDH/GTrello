gTrelloApp
	.controller("MainController", ["$scope", "$q", "utilService", function($scope, $q, utilService){
		utilService.trelloInit();
		$scope.authorized = Trello.authorized();
		$scope.settingUrl = "/src/settings/index.html";
	}]);