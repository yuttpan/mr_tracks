scotchApp.service('DataService', function($http) {

    this.postData = function(data, callback) {

        $http({
            method: 'POST',
            url: 'post.json',
            data: data,
            headers: {
                'Content-type': 'application/json'
            }
        }).success(function(resp) {
            callback(resp);
        }).error(function() {
            callback(undefined);
        });
    };

    this.loginService = function(data) {

        var formdata = data;
        console.log(formdata)
        var promise = $http({
            method: 'POST',
            url: './api/login.php',
            data: formdata

        });
        return promise;


    };
    //ตรวจสอบ AN
    this.AnService = function(data) {
        var fdata = data;

        var promise = $http({
            method: 'POST',
            url: './api/anCheck.php',
            data: fdata
        })

        return promise;
    }


    //รับเวชระเบียน
    this.AnService1 = function(data) {
        var fdata = data;
        console.log(fdata);
        var promise = $http({
            method: 'POST',
            url: './api/reciveAn.php',
            data: fdata
        })

        return promise;
    }

    //ส่งเวชระเบียน
    this.AnSend = function(data) {
        var fdata = data;
        console.log(fdata);
        var promise = $http({
            method: 'POST',
            url: './api/sendAn.php',
            data: fdata
        })

        return promise;
    }

    //รายชื่อเจ้าหน้าที่
    this.userService = function() {
        //var fdata = data;
        var promise = $http({
            method: 'GET',
            url: './api/listuser.php',
            // data: fdata
        })

        return promise;
    }

    //เพิ่มเจ้าหน้าที่
    this.Adduser = function(data) {
        var fdata = data;
        var promise = $http({
            method: 'POST',
            url: './api/adduser.php',
            data: fdata
        })

        return promise;
    }
});