/**
 * Service of utilService
 * @namespace Services
 */
(function(){ 'user strict';
	angular.module('gTrelloApp').service('utilService', utilService);

	function utilService(){
		return{
			trelloInit: trelloInit
		}

		function trelloInit(){
			Trello.setKey('5e27ed043503d1a1e999e285596621e2');
			Trello.setToken(localStorage.getItem('trello_token'));
		}
	}
})();