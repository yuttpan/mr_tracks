var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
        templateUrl: 'main.html',
        // controller: 'mainController'
    })

    // route for the about page
    .when('/red', {
        templateUrl: 'red.htm',
        //controller: 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
        templateUrl: 'pages/contact.html',
        // controller: 'contactController'
    });
});