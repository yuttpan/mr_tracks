scotchApp.controller('reciveController', function ($scope, $http, $location, $localStorage, DataService) {
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




    $scope.mralistSend = function () {

        //console.log($scope.dep);
        DataService.mraReciveList().success(function ($data) {
            var getdata1 = angular.extend($data);
            //console.log(getdata.length)

            $scope.mralistSend = getdata1;

            console.log($scope.mralistSend)
            //$scope.dep = '';
        });
        console.log($scope.dep);
    }


    $scope.mralistSend();

    $scope.f = {};
    $scope.reciveAn = function (data) {
        $scope.f.user_r = $localStorage.user
        $scope.f.id = data;
        console.log($scope.f);

        DataService.mraRecive($scope.f).success(function ($data) {
            var getdata = angular.extend($data);
            //console.log(getdata.length)

            $scope.response = getdata;

            console.log($scope.response.data)
            if (getdata.data == 'success') {
                alert('บันทึกข้อมูลสำเร็จ')


            } else {
                alert('ไม่สามารถบันทึกข้อมูลได้')
            }

        });
    }
    $scope.mralistSend();

    $scope.form = {};
    $scope.form.user = $localStorage.user;
    console.log($scope.form)
















});