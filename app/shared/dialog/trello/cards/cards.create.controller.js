(function() {
  'use strict';

  angular
    .module('gTrello')
    .controller("CardCreateController", ctrl);

  function ctrl(trelloService) {
    var vm = this;

    vm.form = {};
    vm.form.title = null;
    vm.form.description = null;
    vm.form.dueDate = null;
    vm.form.list = null;
    vm.form.url = null;
    vm.form.board;

    vm.boards = null;
    vm.lists = null;

    vm.loadBoards = loadBoards;
    vm.loadLists = loadLists;
    vm.resetLists = resetLists;
    vm.createCard = createCard;

    function loadBoards(){
      trelloService.getBoards().then(
        function(boards){
          vm.boards = boards;
        },
        function(error){
          console.log("[CardCreateController] Unable to load boards : " + error.message);
        }
      )
    }

    function loadLists(){
      trelloService.getListsByBoardId(vm.form.board.id).then(
        function(lists){
          vm.lists = lists;
        },
        function(error){
          console.log("[CardCreateController] Unable to load lists : " + error.message);
        }
      )
    }

    function resetLists(){
      vm.lists = null;
      vm.form.list = null;
    }

    function createCard(form){
      trelloService.createCard(form);
    }

  };
})();