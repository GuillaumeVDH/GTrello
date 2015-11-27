/**
 * Created by anthonycallaert on 14/11/2015.
 * Controller of LoginController
 * @namespace Controllers
 */
(function () {
  'use strict;'

  angular
    .module('gTrello')
    .controller('LoginController', ctrl);

  function ctrl(utilService, userService, user, $scope, $state) {
    var vm = this;

    vm.userService = userService;
    vm.user = user;

    /*utilService.trelloInit();*/

    Trello.authorize({
      interactive: false,
      success: function () {
        userService.updateUser();
      },
      error: function(error){
        userService.updateUser();
        console.log('error : ' + error);
      }
    });

    $scope.$watch('vm.user.isLoggedIn', function(current, original) {
      if(current == true){
        $state.go("default", {}, {location : false});
      } else {
        $state.go("login", {}, {location : false});
      }
    });

  };
}());