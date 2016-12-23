scotchApp.controller('mainController', function ($scope, $http, $location, $localStorage) {
	// create a message to display in our view
	console.log($localStorage.stutus)
	if ($localStorage.status === null) {

			alert("ท่านยังไม่เข้าระบบ กรุณา Login");
			$scope.st = false;
			$location.path('/login');

		} else {
			$scope.user = $localStorage.user;
			$scope.st = $localStorage.status;
		}

	console.log($scope.st);

	$scope.form = {};


	$scope.logout = function () {
		$localStorage.status = null;
		$location.path('/login');

	}




});