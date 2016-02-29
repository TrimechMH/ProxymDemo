/**
 * app.js
 * @author  TrimecheMH
 * @Copyright Proxym-it
 * Created at 2/25/2016
 * Last update at "change me"
 * Module Angular
 * write your description here !!!
 */
var app = angular.module('app', ['ui.router','loginController']);


/**
 * loading of authentication that contain all the routes for UI authentication
 */
app.config(function ($stateProvider, $urlRouterProvider) {
    var authenticationUrl = demo.contants.BASE_MODULES_PATH + demo.contants.modules.AUTHENTICATION_MODULE_NAME + '/' + demo.contants.RELATIVE_PARTIAL_MODULE_PATH ;
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("");
    //
    // Now set up the states
    $stateProvider
        .state('changePassword', {
            url: "/changePassword",
            templateUrl: authenticationUrl + 'changePassword.html'
        })
        .state('login', {
            url: "/login",
            templateUrl: authenticationUrl + 'login.html',
            controller: 'loginController'
        });
});
// start application
app.run(['$rootScope', '$state', function ($rootScope, $state) {
    $state.go('login');
}]);