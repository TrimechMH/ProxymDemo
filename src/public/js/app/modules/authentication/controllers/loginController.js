/**
 * loginController.js
 * @author  TrimecheMH
 * @Copyright Proxym-it
 * Created at 2/26/2016
 * Last update at "change me"
 * Module authentication
 * write your description here !!!
 */
/**
 * Create a controller for demo application
 */
var loginController = angular.module('loginController', []);
loginController.controller('loginController', function ($scope, $state) {
    /**
     * Indicates if the button change password is disabled
     * @type {boolean}
     */

    $scope.isValidateChangePassword = '';
    $scope.user = {name:'ProxymIT',
        userPassword:'ProxymHelpdesk',
        oldPassword:'',
        newPassword:'',
        newConfirmPassword:''
    };

    /**
     * This use case
     */
    $scope.validateChangePassword = function () {
        if ($scope.changePasswordForm.$valid){

            // oldPassword != userPassword
            if ($scope.user.userPassword !== $scope.user.oldPassword){

                $scope.isValidateChangePassword = 'invalid input : old password is wrong';
            }

            // oldPassword = userPassword
            else if ($scope.user.userPassword === $scope.user.oldPassword){

                // oldPassword = userPassword && newPassword != newConfirmPassword
                if ($scope.user.newPassword !== $scope.user.newConfirmPassword){
                    $scope.isValidateChangePassword = 'invalid input : new password and confirm password are not the same';
                }

                // oldPassword === userPassword && newPassword === newConfirmPassword
                else if ($scope.user.newPassword === $scope.user.newConfirmPassword){
                    $scope.isValidateChangePassword = 'password changed >>> do something';

                    // for example change the user password
                    $scope.user.userPassword = $scope.user.newPassword;
                }
            }
        }
    };

    /**
     * Navigate to the change password page.
     */
    $scope.changeState = function () {
        $state.go('changePassword');
    };
});