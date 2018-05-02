(function() {
    'use strict';
    angular.module('app').config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/main");
            $stateProvider.state('main',{
                url:'/main',
                templateUrl:'templates/main/main.html',
                controller: 'MainCtrl'
            });
    }]);
})();