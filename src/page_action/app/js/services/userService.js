/**
 * Factory of userService
 * @namespace Factories
 */
(function(){
    angular.module('gTrelloApp').factory('userService', userService);

    /**
     * @namespace userService
     * @desc Access to user account
     * @memberOf Factories
     */
    function userService(user){
        return {
            updateUser: updateUser,
            logoutFromTrello: logoutFromTrello
        }

        function updateUser(){
            user.isLoggedIn = Trello.authorized();
            console.log("isLoggedIn :" + user.isLoggedIn);
        };

        function logoutFromTrello(){
            Trello.deauthorize();
            updateUser();
        };
    }
})();