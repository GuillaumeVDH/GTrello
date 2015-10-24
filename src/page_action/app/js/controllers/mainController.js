gTrelloApp
	.controller("MainController", ["$scope", "utilService", "$location", function($scope, utilService, $location){
		utilService.trelloInit();
		$scope.authorized = Trello.authorized();

		if(Trello.authorized){
			$location.url('/boards');
		} else {
			$location.url('/test');
		}
	}]);