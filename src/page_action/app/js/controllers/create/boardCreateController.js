(function() {
    'use strict';

    angular
        .module('gTrelloApp')
        .controller("BoardCreateController", ctrl);

    ctrl.$inject = ['trelloService'];

    function ctrl(trelloService) {
        var vm = this;

        vm.form = {};
        vm.form.title;
        vm.form.description;
        vm.createBoard = createBoard;

        function createBoard(){
            trelloService.createBoard("board de test").then(
                function(boards) {
                    console.log("board created");
                },
                function(error){
                    console.log("[boardCreateController] Unable to create board : " + error.message);
                }
            )
        };

    };
})();