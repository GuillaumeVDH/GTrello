(function() {
    'use strict';

    angular
        .module('gTrelloApp')
        .controller("BoardCreateController", ctrl);

    ctrl.$inject = ['trelloService'];

    function ctrl(trelloService) {
        var vm = this;

        vm.form = {};
        vm.form.title = null;
        vm.form.description = null;
        vm.form.team = null;
        vm.createBoard = createBoard;
        vm.teams = null;
        vm.loadTeams = loadTeams;

        function createBoard(form){
            trelloService.createBoard(form).then(
                function(boards) {
                    console.log("board created");
                },
                function(error){
                    console.log("[boardCreateController] Unable to create board : " + error.message);
                }
            )
        };

        function loadTeams(){
            trelloService.getTeams().then(
                function(teams){
                    vm.teams = teams;
                    console.log(teams);
                },
                function(error){
                    console.log("[boardCreateController] Unable to load teams : " + error.message);
                }
            )
        }

    };
})();