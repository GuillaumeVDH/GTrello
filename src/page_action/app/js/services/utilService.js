(function(){ 'user strict';
	angular
		.module('gTrelloApp')
		.service('utilService', utilService);

	function utilService(){
		var service = {
			trelloInit: trelloInit
		};

		return service;

		function trelloInit(){
			Trello.setKey('5e27ed043503d1a1e999e285596621e2');
			Trello.setToken(localStorage.getItem('trello_token'));
		}
	}
})();