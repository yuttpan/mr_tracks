

scotchApp.controller('sendController', function ($scope, $http, $location) {

	if ($localStorage.status === null) {

		alert("ท่านยังไม่เข้าระบบ กรุณา Login");
		$scope.st = false;
		$location.path('/login');

	} else {
		$scope.user = $localStorage.user;
		$scope.st = $localStorage.status;
	}
	$scope.form = {};
	$scope.btnHome = function (data) {

		$state.go('list');
	}

	$scope.results = "result here.";
	$scope.form.date = new Date();
	$scope.form.user = $localStorage.user;
	console.log($scope.form.user);



	/*	$scope.send = function (data) {
			console.log(data)
		}
	*/
	//$scope.user = $localStorage.user




});
