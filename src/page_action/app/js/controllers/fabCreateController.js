(function() {
    'use strict';

    angular
        .module('gTrelloApp')
        .controller("FabCreateController", ctrl);

    ctrl.$inject = [];

    function ctrl(trelloService) {
        var vm = this;

        vm.isOpen = false;


    };
})();