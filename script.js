// create the module and name it scotchApp
var App = angular.module('ksnApp', ['ngRoute', 'ngStorage']);

// configure our routes
App.config(function ($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl: 'pages/main.html',
			//	controller: 'mainController'
		})


		.when('/login', {
			templateUrl: 'pages/login.html',
			//	controller: 'loginController'
		});

});

