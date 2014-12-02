'use strict';
app.controller('indexController', ['$scope', '$location', function ($scope, $location) {

    $scope.logOut = function () {
      
        $location.path('/home');
    }
	
	$scope.LogIn = function () {

    }

}]);