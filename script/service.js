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
    //ตรวจสอบ AN
    this.AnService = function (data) {
        var fdata = data;
        console.log(fdata);
        var promise = $http({
            method: 'POST',
            url: './api/anCheck.php',
            data: fdata
        })

        return promise;
    }

    this.AnRegist = function (data) {
        var fdata = data;
        console.log(fdata);
        var promise = $http({
            method: 'POST',
            url: './api/anRegist.php',
            data: fdata
        })

        return promise;
    }


    //รับเวชระเบียน
    this.AnService1 = function (data) {
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
    this.AnSend = function (data) {
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
    this.doctorService = function () {
        //var fdata = data;
        var promise = $http({
            method: 'GET',
            url: './api/listdoctor.php',
            // data: fdata
        })

        return promise;
    }
    this.departService = function () {
        //var fdata = data;
        var promise = $http({
            method: 'GET',
            url: './api/listdepart.php',
            // data: fdata
        })

        return promise;
    }

    this.userHosService = function () {
        //var fdata = data;
        var promise = $http({
            method: 'GET',
            url: './api/user.php',
            // data: fdata
        })

        return promise;
    }

    //เพิ่มเจ้าหน้าที่
    this.Adddoctor = function (data) {
        var fdata = data;
        console.log(fdata)
        var promise = $http({
            method: 'POST',
            url: './api/adddoc.php',
            
            data: fdata
        })

        return promise;
    }

    this.mraService = function () {
        //var fdata = data;
        var promise = $http({
            method: 'GET',
            url: './api/listmra.php',
            // data: fdata
        })

        return promise;
    }

    this.mraReciveList = function () {
        //var fdata = data;
        //  console.log(fdata);
        var promise = $http({
            method: 'GET',
            url: './api/listmra_recive.php',
            //data: fdata
        })

        return promise;
    }

    this.mraRecive = function (data) {
        var fdata = data;
        console.log(fdata);
        var promise = $http({
            method: 'POST',
            url: './api/mra_recive.php',
            data: fdata
        })

        return promise;
    }

     this.mraDoctorService = function () {
        //var fdata = data;
        var promise = $http({
            method: 'GET',
            url: './api/listmradoctor.php',
            // data: fdata
        })

        return promise;
    }

    this.sendDoctor = function (data) {
        var fdata = data;
        console.log(fdata);
        var promise = $http({
            method: 'POST',
            url: './api/senddoctor.php',
            data: fdata
        })

        return promise;
    }


    this.doctorRecive = function (data) {
        var fdata = data;
        console.log(fdata);
        var promise = $http({
            method: 'POST',
            url: './api/doctorrecive.php',
            data: fdata
        })

        return promise;
    }
});