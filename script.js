// create the module and name it scotchApp
var scotchApp = angular.module('ksnApp', ['ngRoute', 'ngStorage']);



// configure our routes
scotchApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/users', {
            templateUrl: 'pages/listUser.html',
            controller: 'userController'
        })
        .when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'loginController'
        })
        .when('/recive', {
            templateUrl: 'pages/recive.html',
            controller: 'reciveController'
        });


});

// create the controller and inject Angular's $scope

scotchApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});