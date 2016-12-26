scotchApp.controller('userController', function ($scope, $http, $location, $localStorage) {
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


    $http.get("http://ksnhealth.ddns.net/mra_api/listuser.php")
        .then(function (response) {
            $scope.myWelcome = response.data;
            console.log(response)
            console.log($scope.myWelcome)
        });


});