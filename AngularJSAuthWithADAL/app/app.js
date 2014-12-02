var app = angular.module('AngularAuthApp', ['ngRoute', 'AdalAngular']);

app.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalAuthenticationServiceProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.when("/orders", {
        controller: "ordersController",
        templateUrl: "/app/views/orders.html",
        requireADLogin: true
    });

    $routeProvider.when("/userclaims", {
        templateUrl: "/app/views/userclaims.html",
        requireADLogin: true
    });

    $routeProvider.otherwise({ redirectTo: "/home" });

    adalAuthenticationServiceProvider.init(
      {
          tenant: 'taiseerjoudeharamex.onmicrosoft.com',
          clientId: '1725911b-ad8f-4295-8258-cf95ba9f7ea6'
      }, $httpProvider);

}]);

var serviceBase = 'https://ngadal.azurewebsites.net/';
//var serviceBase = 'http://localhost:10966/';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase
});