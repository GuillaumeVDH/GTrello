(function(){
	angular
		.module("gTrelloApp")
		.controller("BoardController", boardController);

	boardController.$inject = ["$q", "utilService"];

	function boardController($q, utilService){
		var vm = this;

		vm.status;
		vm.boards = [];
		vm.loadBoards = loadBoards;

		function loadBoards(){
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
					vm.status = "success";
					vm.boards = boards;
				},
				function(error){
					vm.status = "error";
					console.log("[boardController] Unable to load board : " + error.message);
				}
			);
		}
	};
})();