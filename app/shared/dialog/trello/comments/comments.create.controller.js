(function() {
  'use strict';

  angular
    .module('gTrello')
    .controller("CommentCreateController", ctrl);

  function ctrl(trelloService) {
    var vm = this;

    vm.form = {};
    vm.form.board = null;
    vm.form.list = null;
    vm.form.card = null;
    vm.form.comment = null;

    vm.boards = null;
    vm.lists = null;
    vm.cards = null;

    vm.loadBoards = loadBoards;
    vm.loadLists = loadLists;
    vm.loadCards = loadCards;

    vm.resetLists = resetLists;
    vm.resetCards = resetCards;

    vm.createComment = createComment;

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

    function loadCards(){
      trelloService.getCardsByListId(vm.form.list.id).then(
        function(cards){
          vm.cards = cards;
        },
        function(error){
          console.log("[CommentCreateController] Unable to load cards : " + error.message);
        }
      )
    }

    function resetCards(){
      vm.cards = null;
      vm.form.card = null;
    }

    function createComment(form){
      trelloService.createComment(form);
    }

  };
})();