gTrelloApp
	.controller("ListController", ["$scope", "$q", "utilService", '$routeParams', function($scope, $q, utilService,  $routeParams){
		$scope.status;
		$scope.lists = [];
		$scope.boardId=$routeParams.boardid;


		//function to load boards into $scope.boards
		$scope.getLists = function(){
			function fetchLists() {
		        var deferred = $q.defer();
		        Trello.get(
				'/boards/'+$scope.boardId+'/lists',
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
