gTrelloApp.factory("userService", [function(){

    var service = {
        isLoggedIn: false
    };

    service.updateLogin= function() {
        service.isLoggedIn = Trello.authorized();
        console.log("update : isLoggedIn = " + service.isLoggedIn);
    };

    service.loginToTrello= function() {
        Trello.authorize({
            type: "popup",
            name: "GTrello",
            scope: { write: true, read: true },
            persist: true,
            success: function () {
                Trello.authorize({
                    interactive: false,
                    success: function () {
                        service.updateLogin();
                    }
                });
            }
        })
    };

    service.logoutFromTrello= function() {
        Trello.deauthorize();
        console.log("logout");
        service.updateLogin();
    }

    return service;
}]);