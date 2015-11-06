/**
* Factory of trelloService
* @namespace Factories
 */
(function(){ 'use strict';
    angular.module('gTrelloApp').factory('trelloService', trelloService);

    /**
     * @namespace trelloService
     * @desc Access to Trello boards
     * @memberOf Factories
     */
    function trelloService($q, $rootScope){ //TODO find an other solution than global scope

        var pathGetBoard = 'members/me/boards';
        return {
            getBoards: getBoards,
            createBoard: createBoard,
            getTeams: getTeams
        }

        /**
         * @name getBoards
         * @desc Get boards on our Trello
         * @returns {String}
         * @memberOf Factories.trelloService
         */
        function queryGet(entity_name) {
            var deferred = $q.defer();
            $rootScope.loading = true;
            Trello.get(entity_name, function (data) {
                // wrap call to resolve in $apply as this function is out of the main event loop
                $rootScope.$apply(function () {
                    deferred.resolve(data);
                    $rootScope.loading = false;
                });
            }, function (response) {             // error
                $rootScope.$apply(function () {
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
            return queryGet(pathGetBoard);
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
    }

})();

