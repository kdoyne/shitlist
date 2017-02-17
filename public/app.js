// public/core.js
var shitlist = angular.module('shitlist', []);

function findOutController($scope, $http) {
    $scope.address = {};

    // when submitting the add form, send the text to the node API
    $scope.getReps = function() {
        $http.post('/api/reps', $scope.address)
            .success(function(data) {
                $scope.address = {};
                console.log(data);
                $scope.reps = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}