(function(){ 'use strict';
    angular
        .module('gTrelloApp')
        .factory('trelloService', trelloService);

    trelloService.$inject = ['$q', '$rootScope'];

    function trelloService($q, $rootScope){
        var service = {
            getBoards: getBoards
        };

        return service;

        function query(entity_name){
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

        function getBoards(){
            return query('members/me/boards');
        }
    }

})();