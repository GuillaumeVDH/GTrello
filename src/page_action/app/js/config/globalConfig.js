/**
 * Created by anthonycallaert on 02/11/2015.
 */
(function(){ "use strict";

    angular
        .module('gTrelloApp')
        .config(config);

    function config($compileProvider, $httpProvider){
        $compileProvider.aHrefSanitizationWhitelist (/^\s*(chrome-extension):/);

        delete $httpProvider.defaults.headers.common["X-Requested-With"];
    };
})();