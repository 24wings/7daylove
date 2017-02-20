angular.module('myApp', ['ngRoute', 'myApp.controllers', 'ngSanitize'])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'pages/index.html',
                controller: 'IndexCtrl'
            })
            .when('/petLife', {
                templateUrl: 'pages/petLife.html',
                controller: 'PetLifeCtrl'
            })
            .when('/petLifeDetail/:_id', {
                templateUrl: 'pages/petLifeDetail.html',
                controller: 'PetLifeDetailCtrl'
            })
            .otherwise('/');


    });