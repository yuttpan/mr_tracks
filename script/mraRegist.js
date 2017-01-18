scotchApp.controller('mraRegistController', function ($scope, $http, $location, $localStorage, DataService) {
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


    $scope.listmra = function () {
        DataService.mraService().success(function ($data) {
            var getdata = angular.extend($data);
            console.log(getdata)

            //$scope.an = getdata.data.an;
            //$scope.ptname = getdata.data.ptname;
            // console.log($scope.an)

            if (getdata == null) {
                alert("ไม่มีข้อมูล");
            } else {
                $scope.mra = getdata;
            }

        });



    }

    $scope.listmra();

});
