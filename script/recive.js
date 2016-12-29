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
    $scope.chkAn = function() {
        DataService.AnService($scope.form.an).success(function($data) {
            var getdata = angular.extend($data);
            console.log(getdata)

            $scope.an = getdata.data.an;
            $scope.ptname = getdata.data.ptname;
            // console.log($scope.an)

        });



    }


    $scope.chkAn1 = function() {
        $scope.form.action = 'R'
        DataService.AnService1($scope.form).success(function($data) {
            var getdata = angular.extend($data);
            console.log(getdata)



        });



    }




});