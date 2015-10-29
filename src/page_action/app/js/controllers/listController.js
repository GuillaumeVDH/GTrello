gTrelloApp
	.controller("ListController", ["$scope", "$q", "utilService", function($scope, $q, utilService,  $routeParams){
		$scope.status;
		$scope.lists = [];
		$scope.params = $routeParams;

		//function to load boards into $scope.boards
		$scope.getLists = function($boardId){
			function fetchLists() {
		        var deferred = $q.defer();
		        Trello.get(
				//'/boards/'+{{params.boardId}}+'/lists',
				'/boards/54a806cfbb34c337022becb8/lists',
		        	{fields: "closed,name,id"},
		        	function(data) {
		            	deferred.resolve(data);
		        	},
		        	function(error){
		        		deferred.resolve(error);
		        	}
		        );
		        return deferred.promise;
	    	}

		    fetchLists().then(
		    	function(lists) {
		    		$scope.status = "success";
		        	$scope.lists = lists;
	    		},
	    		function(error){
	    			$scope.status = "error";
	    			console.log("[listController] Unable to load board : " + error.message);
	    		}
	    	);
		};
	}]);
