gTrelloApp.controller('LoginController', ['$scope', function($scope){
    $scope.token = null;
    $scope.authorized = Trello.authorized();
    $scope.login = function(){
        Trello.setKey("5e27ed043503d1a1e999e285596621e2");
        Trello.authorize({
            type: 'popup',
            name: "GTrello",
            persit: true,
            scope: {read: true, write: true},
            expiration: 'never',
            success: function(data) {
                console.log("success");
                chrome.extension.sendMessage({
                        command: 'saveToken',
                        token: localStorage.getItem('trello_token')
                    }, function(data) {
                        chrome.tabs.getCurrent(function (tab) {
                            chrome.tabs.remove(tab.id)
                        });
                    });
            },
            error: function() {
                console.log("error");
            }
        });
    }

    $scope.logout = function(){
        Trello.deauthorize();
    }

}]);

gTrelloApp.controller('BoardListCtrl', function($scope, $q) {
    $scope.boards = [];
    Trello.setKey('5e27ed043503d1a1e999e285596621e2');
    Trello.setToken(localStorage.getItem('trello_token'));

    function fetchBoards() {
        var deferred = $q.defer();
        Trello.get('members/me/boards', {fields: "closed,name,idOrganization"}, function(data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    fetchBoards().then(function(boards) {
        $scope.boards = boards;
    });

});