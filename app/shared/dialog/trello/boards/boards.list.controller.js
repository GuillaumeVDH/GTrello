/**
 * Created by anthonycallaert on 18/11/2015.
 */
/**
 * Controller of BoardController
 * @namespace Controllers
 */
(function(){
  angular.module("gTrello").controller("BoardsListController", boardController);

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
          console.log("[boardController] Unable to load boards : " + error.message);
        }
      );
    }
  };
})();