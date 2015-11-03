(function(){
	angular
		.module("gTrelloApp")
		.controller("BoardController", boardController);

	boardController.$inject = ['trelloService'];

	function boardController(trelloService){
		var vm = this;

		vm.status;
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