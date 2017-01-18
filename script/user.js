scotchApp.controller('userController', function ($scope, $http, $location, $localStorage, DataService) {
    // create a message to display in our view
    //  console.log($localStorage.stutus)
    if ($localStorage.status === null) {

        alert("ท่านยังไม่เข้าระบบ กรุณา Login");
        $scope.st = false;
        $location.path('/login');

    } else {
        $scope.user = $localStorage.user;
        $scope.st = $localStorage.status;
        console.log($scope.user)
    }

    $scope.user = function () {
        DataService.userService().success(function ($data) {
            var getdata = angular.extend($data);
            console.log(getdata)

            //$scope.an = getdata.data.an;
            //$scope.ptname = getdata.data.ptname;
            // console.log($scope.an)
            $scope.user = getdata;
        });
    }

    $scope.user();
    $scope.userhos = function () {
        DataService.userHosService().success(function ($data) {
            var getdata = angular.extend($data);
            console.log(getdata)

            //$scope.an = getdata.data.an;
            //$scope.ptname = getdata.data.ptname;
            // console.log($scope.an)
            $scope.listuser = getdata;
        });
    }

    $scope.userhos();

    $scope.selectAction = function () {
        console.log($scope.myOption);
    };

    $scope.form = {};

    $scope.addUser = function (form) {
        console.log(form);
        DataService.Adduser($scope.form).success(function ($data) {
            var getdata = angular.extend($data);
            console.log(getdata.data)

            if (getdata.data == 'success') {
                alert('บันทึกข้อมูลสำเร็จ')
                $location.path('/users');
            } else {
                alert('ไม่สามารถบันทึกข้อมูลได้')
            }

        });
    }
});

