angular.module('myApp.controllers')
    .controller('IndexCtrl', function($http, $scope) {
        $scope.top5PetLifes = [];
        $scope.top3PetInformations = [];
        $scope.top3PetHeathys = [];
        $scope.top3Actions = [];
        $http.get('/petLife/top5').then(function(rtn) {
            $scope.top5PetLifes = rtn.data;
        });

        $http.get('/petInformation/top3').then(function(rtn) {
            $scope.top3PetInformations = rtn.data;
        });
        $http.get('/petHeathy/top3').then(function(rtn) {
            $scope.top3PetHeathys = rtn.data;
        });
        $http.get('/petAction/top3').then(function(rtn) {
            $scope.top3PetActions = rtn.data;
        });
    });