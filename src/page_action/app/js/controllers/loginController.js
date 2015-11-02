/**
 * Created by anthonycallaert on 02/11/2015.
 */
(function(){ 'use strict';
    angular
        .module('gTrelloApp')
        .controller('LoginController', loginController);

    loginController.$inject = ["utilService", "$mdDialog", "userService", "user", '$scope', '$location'];

    function loginController(utilService, $mdDialog, userService, user, $scope, $location){
        var vm = this;

        vm.userService = userService;
        vm.user = user;
        vm.showConfirm = showConfirm;

        function showConfirm(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Please log in to Trello !')
                .content('You need to authorize GTrello App to access your Trello data')
                .targetEvent(ev)
                .parent(angular.element(document.querySelector('md-content')))
                .ok('Options')
                .cancel('Cancel');
            $mdDialog.show(confirm).then(
                function () {
                    chrome.tabs.create({'url': chrome.extension.getURL('src/settings/index.html')}, function (tab) {
                        // Tab opened.
                    });
                },
                function () {
                });
        };

        $scope.$watch('vm.user.isLoggedIn', function(current, original) {
            if(current == false){
                showConfirm();
            }
        });

        utilService.trelloInit();

        Trello.authorize({
            interactive: false,
            success: function () {
                userService.updateUser();
                $location.url('/boards');
            }
        });
    }
})();