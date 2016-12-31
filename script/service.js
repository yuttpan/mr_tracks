scotchApp.service('DataService', function ($http) {

    this.postData = function (data, callback) {

        $http({
            method: 'POST',
            url: 'post.json',
            data: data,
            headers: {
                'Content-type': 'application/json'
            }
        }).success(function (resp) {
            callback(resp);
        }).error(function () {
            callback(undefined);
        });
    };

    this.loginService = function (data) {

        var formdata = data;
        console.log(formdata)
        var promise = $http({
            method: 'POST',
            url: './api/login.php',
            data: formdata

        });
        return promise;


    };

    this.AnService = function (data) {
        var fdata = data;
        var promise = $http({
            method: 'POST',
            url: './api/anCheck.php',
            data: fdata
        })

        return promise;
    }

    this.AnService1 = function (data) {
        var fdata = data;
        var promise = $http({
            method: 'POST',
            url: './api/reciveAn.php',
            data: fdata
        })

        return promise;
    }
    this.userService = function () {
        //var fdata = data;
        var promise = $http({
            method: 'GET',
            url: './api/listuser.php',
            // data: fdata
        })

        return promise;
    }
});