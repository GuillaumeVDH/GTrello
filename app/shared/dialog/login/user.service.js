/**
 * Factory of userService
 * @namespace Factories
 */
(function(){
  angular.module('gTrello').factory('userService', userService);

  /**
   * @namespace userService
   * @desc Access to user account
   * @memberOf Factories
   */
  function userService(user){

    return {
      updateUser: updateUser,
      logoutFromTrello: logoutFromTrello
    }

    function updateUser(){
      chrome.storage.local.get({'trello_token' : ''}
        , function(items) {
          Trello.setKey('5e27ed043503d1a1e999e285596621e2');
          if(items.trello_token){
            Trello.setToken(items.trello_token);
            user.isLoggedIn = true;
          } else {
            user.isLoggedIn = false;
            Trello.deauthorize();
          }
        });
    };

    function logoutFromTrello(){
      Trello.deauthorize();
      chrome.storage.local.remove('trello_token');
      updateUser();
    };
  }
})();