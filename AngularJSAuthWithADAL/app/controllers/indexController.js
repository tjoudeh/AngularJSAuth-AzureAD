'use strict';
app.controller('indexController', ['$scope', 'adalAuthenticationService', '$location', function ($scope, adalAuthenticationService, $location) {

    $scope.logOut = function () {
      
        adalAuthenticationService.logOut();
    }

    $scope.LogIn = function () {

        adalAuthenticationService.login();
    }

}]);