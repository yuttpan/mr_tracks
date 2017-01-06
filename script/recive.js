scotchApp.controller('reciveController', function($scope, $http, $location, $localStorage, DataService) {
    // create a message to display in our view
    console.log($localStorage.status)
    if ($localStorage.status === null) {

        alert("ท่านยังไม่เข้าระบบ กรุณา Login");
        $scope.st = false;
        $location.path('/login');

    } else {
        $scope.user = $localStorage.user;
        $scope.st = $localStorage.status;
    }
    $scope.form = {};
    $scope.form.user = $localStorage.user;
    console.log($scope.form)

    $scope.listuser = function() {
        DataService.userService().success(function($data) {
            var getdata = angular.extend($data);
            console.log(getdata)

            //$scope.an = getdata.data.an;
            //$scope.ptname = getdata.data.ptname;
            // console.log($scope.an)
            $scope.listuser = getdata;
        });



    }

    $scope.listuser();

    $scope.chkAn = function() {
        DataService.AnService($scope.form.an).success(function($data) {
            var getdata = angular.extend($data);
            //console.log(getdata)

            $scope.an = getdata.data.an;
            $scope.ptname = getdata.data.ptname;
            //console.log($scope.an)

        });



    }


    $scope.chkAn1 = function() {
        $scope.form.action = 'R'
            //console.log($scope.form)

        DataService.AnService1($scope.form).success(function($data) {
            var getdata = angular.extend($data);
            console.log(getdata.data)

            if (getdata.data == 'success') {
                alert('บันทึกข้อมูลสำเร็จ')
            } else {
                alert('ไม่สามารถบันทึกข้อมูลได้')
            }

        });



    }




});