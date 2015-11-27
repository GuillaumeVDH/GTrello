/**
 * Created by anthonycallaert on 14/11/2015.
 */
/**
 * Created by anthonycallaert on 02/11/2015.
 */

(function(){ 'use strict';
  angular
    .module('gTrello')
    .config(cfg);

  function cfg($routeProvider){
    var templateFolder = "/src/page_action/app/templates/";
    $routeProvider
      .when("/", {
        templateUrl: templateFolder + 'main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();