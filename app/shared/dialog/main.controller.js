/**
 * Created by anthonycallaert on 14/11/2015.
 */

(function () {
  'use strict;'

  angular
    .module('gTrello')
    .controller('DialogMainController', ctrl);

  function ctrl($state) {
    var vm = this;

    vm.goToBoardsCreate = goToBoardsCreate;
    vm.goToListsCreate = goToListsCreate;
    vm.goToCardsCreate = goToCardsCreate;
    vm.goToCommentsCreate = goToCommentsCreate;

    function goToBoardsCreate(){
      $state.go("boards.create", {}, {location : false});
    }

    function goToListsCreate(){
      $state.go("lists.create", {}, {location : false});
    }

    function goToCardsCreate(){
      $state.go("cards.create", {}, {location : false});
    }

    function goToCommentsCreate(){
      $state.go("comments.create", {}, {location : false});
    }
  };
}());