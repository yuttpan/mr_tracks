scotchApp.controller('reciveController', function ($scope, $http, $location, $localStorage) {
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
    $scope.form = {};
    console.log($scope.st);
    $scope.chkAn = function () {
        var parm = {

            'var_an': $scope.form.an

        };
        console.log(parm)
        $http(

            {
                url: 'http://ksnhealth.ddns.net/mra_api/anCheck.php',
                method: 'GET',
                params: parm
            }).then(function (response) {
                $scope.myWelcome = response.data.data.an;


                $scope.ptname = response.data.data.ptname;
                console.log($scope.myWelcome)
            });
    }

    $scope.userSearch = function () {
        $http.get("http://ksnhealth.ddns.net/mra_api/listuser.php")
            .then(function (response) {
                $scope.myWelcome = response.data;
                console.log(response)
                console.log($scope.myWelcome)
            });

    }

})