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


    // $scope.mralistS = [];


    $scope.mralistSend = function () {

        //console.log($scope.dep);
        $http.get("./api/listmra_recive.php")
            .then(function (data) {
                $scope.mralistS = data.data;
                console.log(data.data);
            });

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

            // console.log($scope.response.data)
            if (getdata.data == 'success') {
                alert('บันทึกข้อมูลสำเร็จ')
                // console.log(getdata.length)
                //$state.reload();
                $scope.mralistSend();
            } else {
                alert('ไม่สามารถบันทึกข้อมูลได้')
            }

        });
    }


    $scope.form = {};
    $scope.form.user = $localStorage.user;
    console.log($scope.form)
















});