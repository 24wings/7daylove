angular.module('myApp.controllers')
    .controller('PetLifeCtrl', function($http, $scope, $location) {
        $scope.petLifes = [];
        $http.get('/data/getData?modelName=PetLife').then(function(rtn) {
            $scope.petLifes = rtn.data;
        });
        $scope.goPetLifeDetail = function(_id) {
            $location.path('/petLifeDetail/' + _id);
        };
    });