gTrelloApp.service("utilService", [function(){
	return {
		trelloInit: function(){
			Trello.setKey('5e27ed043503d1a1e999e285596621e2');
	    	Trello.setToken(localStorage.getItem('trello_token'));
		}
	}

}]);