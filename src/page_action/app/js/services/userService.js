(function(){
    angular
        .module('gTrelloApp')
        .factory('userService', userService);

    function userService(user){
        var service = {
            updateUser: updateUser,
            logoutFromTrello: logoutFromTrello
        };

        return service;

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