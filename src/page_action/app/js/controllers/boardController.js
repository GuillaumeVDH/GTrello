gTrelloApp
	.controller("BoardController", ["$scope", "$q", "utilService", function($scope, $q, utilService){
		$scope.status;
		$scope.boards = [];

		//function to load boards into $scope.boards
		$scope.loadBoards = function(){
			function fetchBoards() {
		        var deferred = $q.defer();
		        Trello.get(
		        	'members/me/boards',
		        	{fields: "closed,name,idOrganization,id"},
		        	function(data) {
		            	deferred.resolve(data);
		        	},
		        	function(error){
		        		deferred.resolve(error);
		        	}
		        );
		        return deferred.promise;
	    	}

		    fetchBoards().then(
		    	function(boards) {
		    		$scope.status = "success";
		        	$scope.boards = boards;
	    		},
	    		function(error){
	    			$scope.status = "error";
	    			console.log("[boardController] Unable to load board : " + error.message);
	    		}
	    	);
		};
	}]);