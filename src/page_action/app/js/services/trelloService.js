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
            getBoards: getBoards
        }

        /**
         * @name getBoards
         * @desc Get boards on our Trello
         * @returns {String}
         * @memberOf Factories.trelloService
         */
        function getBoards(){
            return query(pathGetBoard);
        }

        function query(entity_name) {
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
    }

})();

