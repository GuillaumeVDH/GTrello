/**
 * Created by anthonycallaert on 10/11/2015.
 */
(function(){ 'use strict';
  angular.module('gTrello').value('GMAIL_SELECTORS', {
    RESPONSE_OPTIONS : 'gH acX',
    MAIL_CONTENT: 'adn ads'
  });

  angular.module('gTrello').constant('ROUTES',{
    DEFAULT : "/",
    LOGIN : "/login",
    SETTINGS : "/settings/index.html",
    BOARDS : {
      LIST : '/boards/list',
      CREATE : '/boards/create'
    }
  });

  angular.module('gTrello').constant('PATH', {
    TEMPLATE : {
      LAYOUT : '/app/shared/dialog/layout.html',
      MAIN : '/app/shared/dialog/main.html',
      REQUIRE_LOGIN : '/app/shared/dialog/login/requireLogin.html',
      BOARDS : {
        MAIN : '/app/shared/dialog/trello/boards/boards.view.html',
        LIST : '/app/shared/dialog/trello/boards/boards.list.view.html',
        CREATE : '/app/shared/dialog/trello/boards/boards.create.view.html'
      },
      LISTS : {
        MAIN : '/app/shared/dialog/trello/lists/lists.view.html',
        CREATE : '/app/shared/dialog/trello/lists/lists.create.view.html'
      },
      CARDS : {
        MAIN : '/app/shared/dialog/trello/cards/cards.view.html',
        CREATE : '/app/shared/dialog/trello/cards/cards.create.view.html'
      },
      COMMENTS : {
        MAIN : '/app/shared/dialog/trello/comments/comments.view.html',
        CREATE : '/app/shared/dialog/trello/comments/comments.create.view.html'
      }
    }
  })
})();