// create the module and name it scotchApp
var scotchApp = angular.module('ksnApp', ['ngRoute', 'ngStorage']);


scotchApp.run(function ($rootScope, $location, $state) {
	$rootScope.$on('$stateChangeStart',
		function (event, toState, toParams, fromState, fromParams) {
			console.log('Changed state to: ' + toState);
		});

	if ($localStorage.status === null) {
		$state.transitionTo('login');
	}
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
			.when('/contact', {
				templateUrl: 'pages/contact.html',
				controller: 'contactController'
			})
			.when('/login', {
				templateUrl: 'pages/login.html',
				controller: 'loginController'
			});

	});

	// create the controller and inject Angular's $scope

	scotchApp.controller('aboutController', function ($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function ($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});