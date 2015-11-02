(function(){ 'use strict';
    angular
        .module('gTrelloApp')
        .service('TrelloNg', [ '$q', '$rootScope', function($q, $rootScope){

            var TrelloNg = {};

            // wrap Trello queries in angular promise
            TrelloNg.query = function(entity_name) { // success
                var deferred = $q.defer();
                Trello.get(entity_name, function(data) {
                    // wrap call to resolve in $apply as this function is out of the main event loop
                    $rootScope.$apply(function() {
                        deferred.resolve(data);
                    });
                }, function(response) { // error
                    $rootScope.$apply(function() {
                        deferred.reject(response);
                    });
                });

                return deferred.promise;
            };

            return TrelloNg;
        }])

})();