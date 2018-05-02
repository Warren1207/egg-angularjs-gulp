(function() {
    'use strict';
    angular.module('app', [
        'ngAnimate',
        'ngMessages',
        'ngResource',
        'ui.bootstrap',
        'ngCookies',
        'pascalprecht.translate',
        'ngStorage',
        'ui.router'
    ]);
})();
(function() {
    'use strict';
    var app = angular.module('app').config([ '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
            app.controller = $controllerProvider.register;
            app.directive  = $compileProvider.directive;
            app.filter     = $filterProvider.register;
            app.factory    = $provide.factory;
            app.service    = $provide.service;
            app.constant   = $provide.constant;
            app.value      = $provide.value;
    }]);
})();
(function() {
    angular.module('app').controller('MainCtrl',['$scope', function ($scope) {
         $scope.totalItems = 'dfdfsdf';
    }]);
})();
(function() {
    angular.module('app').controller('TodoCtrl',['$scope', function ($scope) {
        $scope.totalItems = 'dfdfsdf';
    }]);
})();
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