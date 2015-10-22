var gTrelloApp = angular.module('gTrelloApp', ['ngMaterial']);

gTrelloApp.config( function ($compileProvider) {
   $compileProvider.aHrefSanitizationWhitelist (/^\s*(chrome-extension):/);
});