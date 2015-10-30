'use strict';

gTrelloApp
	.controller("MainController", [
        "$scope", "utilService", "$location", "$mdDialog", "userService",
        function($scope, utilService, $location, $mdDialog, userService){

		utilService.trelloInit();

        $scope.userService = userService;

        Trello.authorize({
            interactive: false,
            success: userService.updateLogin()
        });

        $scope.showConfirm = function(ev) {
            var confirm = $mdDialog.confirm()
                .title('Please log in to Trello !')
                .content('You need to authorize GTrello App to access your Trello data')
                .targetEvent(ev)
                .parent(angular.element(document.querySelector('md-content')))
                .ok('Authorize!')
                .cancel('Cancel');
            $mdDialog.show(confirm).then(
                function(){
                    userService.loginToTrello();
                },
                function() {
            });
        };
	}]);