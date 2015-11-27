(function() {
  'use strict';

  angular
    .module('gTrello')
    .controller("ListsCreateController", ctrl);

  function ctrl(trelloService) {
    var vm = this;

    vm.form = {};
    vm.form.title = null;
    vm.form.board;

    vm.boards = null;

    vm.loadBoards = loadBoards;
    vm.createList = createList;

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

    function resetLists(){
      vm.lists = null;
      vm.form.list = null;
    }

    function createList(form){
      trelloService.createList(form);
    }

  };
})();