'use strict';

gTrelloApp
	.controller("MainController", ["$scope", "utilService", "$location", "$mdDialog", function($scope, utilService, $location, $mdDialog){
		utilService.trelloInit();

        $scope.login = {
            isLoggedIn : false,
            token : null
        };

        var updateLogin = function(){
            $scope.login.isLoggedIn = Trello.authorized();
            $scope.login.token = Trello.token();
        };

        $scope.login.loginToTrello = function () {
            Trello.authorize({
                type: "popup",
                name: "GTrello",
                scope: { write: true, read: true },
                persist: true,
                success: function () {
                    Trello.authorize({
                        interactive: false,
                        success: function () {
                            updateLogin();
                            chrome.tabs.getCurrent(function(tab){
                                chrome.pageAction.show(tab.id);
                            });
                        }
                    });
                }
            })
        };

		$scope.login.logoutFromTrello = function () {
            Trello.deauthorize();
            updateLogin();
        };

        Trello.authorize({
            interactive: false,
            success: updateLogin
        });

        $scope.showConfirm = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Please log in to Trello !')
                .content('You need to authorize GTrello App to access your Trello data')
                .targetEvent(ev)
                .parent(angular.element(document.querySelector('md-content')))
                .ok('Authorize!')
                .cancel('Cancel');
            $mdDialog.show(confirm).then(
                function(){
                    $scope.login.loginToTrello();
                },
                function() {
            });
        };
	}]);