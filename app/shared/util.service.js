/**
 * Service of utilService
 * @namespace Services
 */
(function(){ 'user strict';
  angular.module('gTrello').service('utilService', utilService);

  function utilService(){
    return{
      trelloInit: trelloInit
    }

    function trelloInit(){
      chrome.storage.local.get('trello_token'
      , function(token) {
          Trello.setKey('5e27ed043503d1a1e999e285596621e2');
          Trello.setToken(token.trello_token);
      });
    }
  }
})();