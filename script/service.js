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
});

scotchApp.controller('MyControlller', function ($scope, DataService) {
    $scope.customer = {};
    $scope.result = {};
    $scope.save = function () {
        console.log($scope.customer)
        DataService.postData($scope.customer, function (data) {
            $scope.result = data;

        });
    };

});