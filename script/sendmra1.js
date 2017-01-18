scotchApp.controller('reciveWardController', function ($scope, $http, $location, $localStorage, DataService) {
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

    // $scope.mralist = [];
    $scope.listmra = function () {
        DataService.mraService().success(function ($data) {
            var getdata1 = angular.extend($data);
            //console.log(getdata.length)

            $scope.mralist = getdata1;

            console.log($scope.mralist)

        });

    }



    $scope.listmra();
    $scope.form = {};
    //$scope.an = {};
    $scope.chkAn = function () {
        console.log($scope.an)
        DataService.AnService($scope.an).success(function ($data) {
            var getdata = angular.extend($data);
            console.log(getdata)

            $scope.anData = getdata;
            // $scope.ptname = getdata.data.ptname;
            $scope.form.user_s = $localStorage.user;
            $scope.form.hn = getdata[0].hn;
            $scope.form.an = getdata[0].an;
            $scope.form.dchdate = getdata[0].dchdate;
            $scope.form.ptname = getdata[0].ptname;
            $scope.form.tdchdate = getdata[0].tdchdate;
            // $scope.form.depsend = ;

            console.log($scope.form.an)

        });

    }


    $scope.listdepart = function () {
        DataService.departService().success(function ($data) {
            var getdata = angular.extend($data);
            console.log(getdata)

            //$scope.an = getdata.data.an;
            //$scope.ptname = getdata.data.ptname;
            // console.log($scope.an)
            $scope.listdepart = getdata;
        });



    }

    $scope.listdepart();




    $scope.anRegist = function () {

        console.log($scope.form)
        DataService.AnRegist($scope.form).success(function ($data) {
            var getdata = angular.extend($data);
            console.log(getdata.data)

            if (getdata.data == 'success') {
                alert('บันทึกข้อมูลสำเร็จ')
                $scope.listmra();

            } else {
                alert('ไม่สามารถบันทึกข้อมูลได้')
            }

        });

    }
});