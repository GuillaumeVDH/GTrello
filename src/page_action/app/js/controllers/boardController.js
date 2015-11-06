/**
 * Controller of BoardController
 * @namespace Controllers
 */
(function(){
	angular.module("gTrelloApp").controller("BoardController", boardController);

	function boardController(trelloService){
		var vm = this;

		vm.boards = [];
		vm.loadBoards = loadBoards;

		function loadBoards(){
			trelloService.getBoards().then(
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