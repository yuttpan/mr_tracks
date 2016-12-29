scotchApp.controller('loginController', function ($scope, $http, $location, $localStorage, DataService) {

	$scope.form = {};

	$scope.btnLogin = function () {
		/*console.log($scope.form);
		var parm = {

			'var_username': $scope.form.txt_usr,
			'var_password': $scope.form.txt_pwd

		};


		console.log(parm);
		$http(

			{
				url: './api/login.php',
				method: 'GET',
				params: parm
			}).then(function (response) {

				if (response.data.status == 'success') {

					$scope.loginname = response.data.data.loginname;
					$scope.username = response.data.data.name;
					$scope.status = response.data.status;
					console.log($scope.status);
					$localStorage.user = $scope.username;
					$localStorage.status = $scope.status;


					$location.path('/');
				} else {
					alert('ชื่อผู้ใช้งานหรือรหัสผ่านผิดพลาด');

				}

			});

*/


		DataService.loginService($scope.form).success(function ($data) {
			var getdata = angular.extend($data);
			console.log(getdata.status)


			if (getdata.status == 'success') {

				$scope.loginname = getdata.data.loginname;
				$scope.username = getdata.data.name;
				$scope.status = getdata.status;
				console.log($scope.status);
				$localStorage.user = getdata.data.name;
				$localStorage.status = getdata.status;


				$location.path('/');
			} else {
				alert('ชื่อผู้ใช้งานหรือรหัสผ่านผิดพลาด');

			}



		})

	}
});