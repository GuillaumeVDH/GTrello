(function(){ 'use strict';
    angular
        .module('gTrelloApp')
        .factory('trelloService', trelloService);

    trelloService.$inject = ['$q', '$rootScope'];


    function trelloService($q, $rootScope){
        var service = {
            getBoards: getBoards,
            createBoard: createBoard,
            getTeams: getTeams,
            getListsByBoardId: getListsByBoardId,
            createCard: createCard
        };

        return service;

        function queryGet(entity_name){
            var deferred = $q.defer();
            $rootScope.loading = true;
            Trello.get(entity_name, function(data) {
                // wrap call to resolve in $apply as this function is out of the main event loop
                $rootScope.$apply(function() {
                    deferred.resolve(data);
                    $rootScope.loading = false;
                });
            }, function(response) { // error
                $rootScope.$apply(function() {
                    deferred.reject(response);
                    $rootScope.loading = false;
                });
            });

            return deferred.promise;
        }

        function queryPost(entity_name, value){
            var deferred = $q.defer();
            $rootScope.loading = true;
            Trello.post(entity_name, value, function(data) {
                // wrap call to resolve in $apply as this function is out of the main event loop
                $rootScope.$apply(function() {
                    deferred.resolve(data);
                    $rootScope.loading = false;
                });
            }, function(response) { // error
                $rootScope.$apply(function() {
                    deferred.reject(response);
                    $rootScope.loading = false;
                });
            });

            return deferred.promise;
        }

        function getBoards(){
            return queryGet('members/me/boards');
        }

        function createBoard(form){
            return queryPost('boards', {
                name : form.title,
                desc : form.description,
                idOrganization: (typeof form.team === "undefined" ? null : form.team.id)
            });
        }

        function getTeams(){
            return queryGet('members/me/organizations');
        }

        function createCard(form){
            return queryPost('cards', {
                name: form.title,
                desc: (typeof form.description === "undefined" ? null : form.description),
                due: (typeof form.dueDate === "undefined" ? null : form.dueDate),
                idList: form.list.id,
                urlSource: (typeof form.url === "undefined" ? "http://www.test.com" : form.url)
            })
        }

        function getListsByBoardId(boardId){
            return queryGet('boards/' + boardId + '/lists');
        }

    }

})();