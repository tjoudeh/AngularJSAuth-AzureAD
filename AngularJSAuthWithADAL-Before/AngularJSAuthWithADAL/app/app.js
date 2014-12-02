var app = angular.module('AngularAuthApp', ['ngRoute', 'angular-loading-bar']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.when("/orders", {
        controller: "ordersController",
        templateUrl: "/app/views/orders.html"
    });
	
	$routeProvider.when("/userclaims", {
        templateUrl: "/app/views/userclaims.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });

}]);

var serviceBase = 'http://localhost:10966/';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase
});