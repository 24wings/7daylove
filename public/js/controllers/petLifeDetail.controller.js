angular.module('myApp.controllers')
    .controller('PetLifeDetailCtrl', function($http, $scope, $routeParams) {

        $scope.petLife = { _id: $routeParams._id };
        $http.get('data/getDataById?modelName=PetLife&_id=' + $routeParams._id).then(function(rtn) {
            $scope.petLife = rtn.data;
        });

    });