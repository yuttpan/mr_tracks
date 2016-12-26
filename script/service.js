scotchApp.service('DataService', function($http) {

    this.postData = function(data, callback) {

        $http({
            method: 'POST',
            url: '../post.json',
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
});

myApp.controller('MyControlller', function($scope, DataService) {
    $scope.customer = {};
    $scope.result = {};
    $scope.save = function() {
        DataService.postData($scope.customer, function(data) {
            $scope.result = data;

        });
    };

});