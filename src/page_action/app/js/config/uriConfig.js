/**
 * Created by anthonycallaert on 02/11/2015.
 */
(function(){ 'use strict';
    angular
        .module('gTrelloApp')
        .filter('encodeURIComponent', filter);

    function filter(){
        return $window.encodeURIComponent;
    }
})();