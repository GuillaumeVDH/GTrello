/**
 * Created by anthonycallaert on 13/11/2015.
 */
(function() {
  'use strict';

  angular
    .module('gTrello')
    .controller("MailButtonController", mailButtonController);

  function mailButtonController($scope, $mdDialog, PATH) {
    var vm = this;

    vm.openDialog = openDialog;

    function openDialog(event, $state){
      var el = document.getElementsByClassName('h7');
      $mdDialog.show({
        controller: 'DialogMainController',
        templateUrl: chrome.extension.getURL(PATH.TEMPLATE.LAYOUT),
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose:true,
        disableParentScroll: false,
        onShowing : function(){

        }
      });
    }

  };
})();
