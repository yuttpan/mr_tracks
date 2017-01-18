// create the module and name it scotchApp
var scotchApp = angular.module('ksnApp', ['ngRoute', 'ngStorage']);



// configure our routes
scotchApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/main.html?v=001',
            controller: 'mainController'
        })
        .when('/sendmra', {
            templateUrl: 'pages/sendMra.html?v=001',
            controller: 'reciveWardController'
        })

        // route for the about page
        .when('/mraRegist', {
            templateUrl: 'pages/mraRegist.html?v=001',
            controller: 'mraRegistController'
        })

        // route for the contact page
        .when('/mraDoctor', {
            templateUrl: 'pages/mraDoctor.html?v=001',
            controller: 'mraDoctorController'
        })
        .when('/login', {
            templateUrl: 'pages/login.html?v=001',
            controller: 'loginController'
        })
        .when('/recive', {
            templateUrl: 'pages/recive.html?v=001',
            controller: 'reciveController'
        })
        .when('/send', {
            templateUrl: 'pages/send.html?v=001',
            controller: 'sendController'
        })
        .when('/addDoctor', {
            templateUrl: 'pages/addDoctor.html?v=001',
            controller: 'addDoctorController'
        })

         .when('/mainReport', {
            templateUrl: 'pages/mainReport.html?v=001',
            controller: 'reportController'
        })

        .when('/regMRa', {
            templateUrl: 'pages/regReport.html?v=001',
            controller: 'reportController'
        });


});

// create the controller and inject Angular's $scope

scotchApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});