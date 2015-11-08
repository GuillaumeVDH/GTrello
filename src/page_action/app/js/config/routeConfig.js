/**
 * Created by anthonycallaert on 02/11/2015.
 */

(function(){ 'use strict';
    angular
        .module('gTrelloApp')
        .config(config);

    function config($routeProvider){
        var templateFolder = "/src/page_action/app/templates/";
        $routeProvider
            .when("/", {
                templateUrl: templateFolder + 'main.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .when("/board/create", {
                templateUrl: templateFolder + 'create/board.html',
                controller: 'BoardCreateController',
                controllerAs: 'vm'
            })
            .when("/lists/:boardid", {
                templateUrl: templateFolder + 'lists.html'
            })
            .when("/boards", {
                templateUrl: templateFolder + 'boards.html',
                controller: 'BoardController',
                controllerAs: 'vm'
            })
            .when("/card/create", {
                templateUrl: templateFolder + 'create/card.html',
                controller: 'CardCreateController',
                controllerAs: 'vm'
            })
            .when("/comment/create", {
                templateUrl: templateFolder + 'create/comment.html',
                controller: 'CommentCreateController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();