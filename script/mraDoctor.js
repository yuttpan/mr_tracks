scotchApp.controller('mraDoctorController', function ($scope, $http, $location, $localStorage, DataService) {

    if ($localStorage.status === null) {

        alert("ท่านยังไม่เข้าระบบ กรุณา Login");
        $scope.st = false;
        $location.path('/login');

    } else {
        $scope.user = $localStorage.user;
        $scope.st = $localStorage.status;
        console.log("Doctor")

//ดึงตารางส่งแพทย์
$scope.mradoctor = function() {
 DataService.mraDoctorService().success(function ($data) {
            var getdata = angular.extend($data);
            console.log(getdata)

            if (getdata == "null") {
                //alert("ไม่มีข้อมูล");
                $scope.mralistdoctor = [];
            } else {
                $scope.mralistdoctor = getdata;
            }
            console.log($scope.mralistdoctor.length)
            console.log($scope.mralistdoctor)
        });

}

$scope.mradoctor();



        //ตรวจสอบ AN
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
                 $scope.form.user_r = $scope.doctorRecive;
                
                console.log($scope.form)

            });

        }





        DataService.doctorService().success(function ($data) {
            var getdata = angular.extend($data);
            console.log(getdata)

            if (getdata == "null") {
                //alert("ไม่มีข้อมูล");
                $scope.listdoctor = [];
            } else {
                $scope.listdoctor = getdata;
            }
            console.log($scope.listdoctor.length)
        });


$scope.sendDoctor = function(){
 
 console.log($scope.form)
        DataService.sendDoctor($scope.form).success(function ($data) {
            var getdata = angular.extend($data);
            console.log(getdata.data)
            
            if (getdata.data == 'success') {
                alert('บันทึกข้อมูลสำเร็จ')
                $scope.mradoctor();

            } else {
                alert('ไม่สามารถบันทึกข้อมูลได้')
            }

        });
    
}


$scope.reciveDoctor = function(data){

$scope.f = {} ;
$scope.f.id = data.id ;
$scope.f.an = data.an ;
$scope.f.hn = data.hn ;
$scope.f.ptname = data.ptname ;
$scope.f.dchdate = data.dchdate ;
$scope.f.user_r = $localStorage.user; ;
$scope.f.u_s = data.doctor ;
    console.log($scope.f)
 DataService.doctorRecive($scope.f).success(function ($data) {
            var getdata = angular.extend($data);
            console.log(getdata.data)
            
            if (getdata.data == 'success') {
                alert('บันทึกข้อมูลสำเร็จ')
                $scope.mradoctor();

            } else {
                alert('ไม่สามารถบันทึกข้อมูลได้')
            }

        });

}
    }





});


scotchApp.controller('addDoctorController', function ($scope, $http, $location, $localStorage, DataService) {

    console.log("Add")


    $scope.doctorList = function () {


        DataService.doctorService().success(function ($data) {
            var getdata = angular.extend($data);
            console.log(getdata)

            if (getdata == "null") {
                //alert("ไม่มีข้อมูล");
                $scope.listdoctor = [];
            } else {
                $scope.listdoctor = getdata;
            }
            console.log($scope.listdoctor.length)
        });


    }
    $scope.doctorList();

    $scope.add_doctor = function () {
        $scope.f = {
            'an': $scope.an
        }
        console.log($scope.f)

        DataService.Adddoctor($scope.f).success(function ($data) {
            var getdata = angular.extend($data);
            //console.log(getdata.length)

            $scope.response = getdata;

            // console.log($scope.response.data)
            if (getdata.data == 'success') {
                alert('บันทึกข้อมูลสำเร็จ')
                // console.log(getdata.length)
                //$state.reload();
                $scope.doctorList();
                $location.path('/mraDoctor');
            } else {
                alert('ไม่สามารถบันทึกข้อมูลได้')
            }

        });
    }


});