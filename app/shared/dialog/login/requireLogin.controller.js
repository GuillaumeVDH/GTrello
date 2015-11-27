/**
 * Created by anthonycallaert on 16/11/2015.
 */
(function () {
  'use strict;'

  angular
    .module('gTrello')
    .controller('RequireLoginController', ctrl);

  function ctrl($window, ROUTES, $mdDialog) {
    var vm = this;

    vm.openOptions = openOptions;

    function openOptions(){
      $window.open(chrome.extension.getURL(ROUTES.SETTINGS), '_blank');
      $mdDialog.hide();
    }

  };
}());