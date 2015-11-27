/**
 * Created by anthonycallaert on 13/11/2015.
 */
(function() {
  'use strict';

  angular
    .module('gTrello')
    .controller("MailButtonController", mailButtonController);

  function mailButtonController($scope, $mdDialog) {
    var vm = this;

    vm.openDialog = openDialog;

    function openDialog(event){
      console.log('openDialog');
      var el = document.getElementsByClassName('h7');
      $mdDialog.show({
        controller: DialogController,
        template: '<p>TEST</p>',
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose:true,
        disableParentScroll: false
      })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    }

    function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }

  };
})();
