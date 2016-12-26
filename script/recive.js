scotchApp.controller('reciveController', function($scope, $http, $location, $localStorage) {
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
    $scope.chkAn = function() {
        var parm = {

            'var_an': $scope.form.an

        };
        console.log(parm)
        $http(

            {
                url: 'http://ksnhealth.ddns.net/mra_api/anCheck.php',
                method: 'GET',
                params: parm
            }).then(function(response) {
            $scope.myWelcome = response.data.data.an;


            $scope.ptname = response.data.data.ptname;
            console.log($scope.myWelcome)
        });
    }

    $scope.reciveAdd = function(data) {
        var parameter = {
            An: $scope.form.an,
            user: $localStorage.user
        }
        console.log(parameter)
        $http.post(url, parameter).
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(data);
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });


    }

})