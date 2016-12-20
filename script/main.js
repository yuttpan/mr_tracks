	scotchApp.controller('mainController', function($scope, $http, $location) {
	    // create a message to display in our view




	    console.log('Login Controller Start.');

	    $scope.form = {};

	    $scope.btnLogin = function() {
	        //console.log($scope.form);
	        var parm = {

	            'var_username': $scope.form.txt_usr,
	            'var_password': $scope.form.txt_pwd

	        };


	        console.log(parm);
	        $http(

	            {
	                url: 'http://ksnhealth.ddns.net/mra_api/login.php',
	                method: 'GET',
	                params: parm
	            }).then(function(response) {

	            if (response.data.status == 'success') {

	                $scope.loginname = response.data.data.loginname;
	                $scope.username = response.data.data.name;
	                $scope.status = response.data.status;
	                console.log($scope.status);
	                $location.path('/about');
	            } else {
	                alert('ชื่อผู้ใช้งานหรือรหัสผ่านผิดพลาด');

	            }

	        });


	    }





	});