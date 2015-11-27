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

  function cfg($stateProvider, $urlRouterProvider, PATH, ROUTES){

    //for any unmatched url
    /*$urlRouterProvider.otherwise(ROUTES.LOGIN);*/

    $stateProvider
      .state("default", {
        templateUrl: chrome.extension.getURL(PATH.TEMPLATE.MAIN),
        controller : 'DialogMainController',
        controllerAs : 'vm'
      })
      .state("login", {
        templateUrl: chrome.extension.getURL(PATH.TEMPLATE.REQUIRE_LOGIN),
        controller : 'RequireLoginController',
        controllerAs : 'vm'
      })
      .state("boards", {
        templateUrl : chrome.extension.getURL(PATH.TEMPLATE.BOARDS.MAIN)
      })
      .state("boards.create", {
        templateUrl: chrome.extension.getURL(PATH.TEMPLATE.BOARDS.CREATE),
        controller: 'BoardsCreateController',
        controllerAs : 'vm'
      })
      .state("boards.list", {
        templateUrl: chrome.extension.getURL(PATH.TEMPLATE.BOARDS.LIST),
        controller: 'BoardsListController',
        controllerAs : 'vm'
      })
      .state("lists", {
        templateUrl : chrome.extension.getURL(PATH.TEMPLATE.LISTS.MAIN)
      })
      .state("lists.create", {
        templateUrl: chrome.extension.getURL(PATH.TEMPLATE.LISTS.CREATE),
        controller: 'ListsCreateController',
        controllerAs : 'vm'
      })
      .state("cards", {
        templateUrl : chrome.extension.getURL(PATH.TEMPLATE.CARDS.MAIN)
      })
      .state("cards.create", {
        templateUrl: chrome.extension.getURL(PATH.TEMPLATE.CARDS.CREATE),
        controller: 'CardsCreateController',
        controllerAs : 'vm'
      })
      .state("comments", {
        templateUrl : chrome.extension.getURL(PATH.TEMPLATE.COMMENTS.MAIN)
      })
      .state("comments.create", {
        templateUrl: chrome.extension.getURL(PATH.TEMPLATE.COMMENTS.CREATE),
        controller: 'CommentsCreateController',
        controllerAs : 'vm'
      })
    ;
  };
})();