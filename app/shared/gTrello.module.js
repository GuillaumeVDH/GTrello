/**
 * Created by anthonycallaert on 09/11/2015.
 */
(function(){ 'use strict';

  angular.module('gTrello', ['ngMaterial', 'ui.router']);

  angular.module('gTrello').config(function($locationProvider){
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
      rewriteLinks : false
    });
  });
})();