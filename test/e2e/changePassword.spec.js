/**
 * changePassword.spec.js
 * @author  TrimecheMH
 * @Copyright Proxym-it
 * Created at 2/26/2016
 * Last update at "change me"
 * Module demo test
 * write your description here !!!
 */
// Testing the E2E of change password view.

//NOTE , protractor run as modules, so we can use require
var constants = require('./helpers/constants');


describe('Should open change password view >>>', function () {
    // Configure pre tests.

    // Get User By bniding
    var user = element(by.exactBinding('user'));

    // Get error message after clicking on the button
    var errorMessage = element(by.binding('isValidateChangePassword'));

    // Get the validation value of each input
    var oldPasswordValid = element(by.binding('changePasswordForm.userOldPassword.$valid'));
    var newPasswordValid = element(by.binding('changePasswordForm.userNewPassword.$valid'));
    var newConfirmPasswordValid = element(by.binding('changePasswordForm.userNewConfirmPassword.$valid'));

    // Get the error value of each input
    var oldPasswordError = element(by.binding('changePasswordForm.userOldPassword.$error'));
    var newPasswordError = element(by.binding('changePasswordForm.userNewPassword.$error'));
    var newConfirmPasswordError = element(by.binding('changePasswordForm.userNewConfirmPassword.$error'));

    // Get the validation value of the from
    var changePasswordForm = element(by.binding('changePasswordForm.$valid'));

    // Configure the browser before charging the page
    beforeEach(function () {
        // Load change password page
        browser.get(constants.CHANGE_PASSWORD_CONTROLLER);
        browser.waitForAngular();
    });

    // Old password input element
    var oldPassword;
    // New password input element
    var newPassword;
    // New confirm password input element
    var newConfirmPassword;
    // Change button input element
    var changeButton;

    // Testing the load of the change password page
    it('should load the server on port 3000  >>>', function () {
        expect(browser.getCurrentUrl()).toEqual(constants.CHANGE_PASSWORD_CONTROLLER);
    });

    // Test the existence of 3 inputs and button
    it('Should load 3 input and button >>>', function () {

        // Loacte the input filed with ng-model
        oldPassword = element(by.model('user.oldPassword'));
        newPassword = element(by.model('user.newPassword'));
        newConfirmPassword = element(by.model('user.newConfirmPassword'));
        changeButton = element(by.model('changePasswordButton'));

    });

    //  * Initialized empty values & the button should be disabled
    it('should initialize to model >>>', function () {
        expect(user.getText()).toContain(' {"name":"ProxymIT","userPassword":"ProxymHelpdesk","oldPassword":"","newPassword":"","newConfirmPassword":""}');
        expect(oldPasswordValid.getText()).toContain('false');
        expect(newPasswordValid.getText()).toContain('false');
        expect(newConfirmPasswordValid.getText()).toContain('false');
        expect(changePasswordForm.getText()).toContain('false');
        expect((changeButton).getAttribute('disabled')).toBeTruthy();
    });

    // Testing button isDisabled if one or two input are empty
    describe('Testing isDisabled with non empty input >>>', function () {

        //Testing button isDisabled if newConfirmPassword is empty
        it('Should be disabled if newConfirmPassword is empty >>>', function () {

            // example of password
            var testPassword = 'myPassword';

            //clear the input value before
            oldPassword.clear();
            newPassword.clear();
            newConfirmPassword.clear();

            // sending the input value
            newConfirmPassword.sendKeys('');
            oldPassword.sendKeys(testPassword);
            newPassword.sendKeys(testPassword);

            // expect that the form is invalid and the button is disabled
            expect(changePasswordForm.getText()).toContain('false');
            expect((changeButton).getAttribute('disabled')).toBeTruthy();
        });

        //Testing button isDisabled if newPassword is empty
        it('Should be disabled if newPassword is empty>>>', function () {

            // example of password
            var testPassword = 'myPassword';

            //clear the input value before
            oldPassword.clear();
            newPassword.clear();
            newConfirmPassword.clear();

            // sending the input value , new password is empty
            newPassword.sendKeys('');
            oldPassword.sendKeys(testPassword);
            newConfirmPassword.sendKeys(testPassword);

            // expect that the form is invalid and the button is disabled
            expect(changePasswordForm.getText()).toContain('false');
            expect((changeButton).getAttribute('disabled')).toBeTruthy();
        });

        //Testing button isDisabled if oldPassword is empty
        it('Should be disabled if oldPassword is empty >>>', function () {

            // example of password
            var testPassword = 'myPassword';

            //clear the input value before
            oldPassword.clear();
            newPassword.clear();
            newConfirmPassword.clear();

            // sending the input value , new password is empty
            oldPassword.sendKeys('');
            newPassword.sendKeys(testPassword);
            newConfirmPassword.sendKeys(testPassword);

            // expect that the form is invalid and the button is disabled
            expect(changePasswordForm.getText()).toContain('false');
            expect((changeButton).getAttribute('disabled')).toBeTruthy();
        });

        //Testing button isDisabled if newPassword and newConfirmPassword are empty
        it('Should be disabled if newPassword and newConfirmPassword are empty >>>', function () {

            // example of password
            var testPassword = 'myPassword';

            //clear the input value before
            oldPassword.clear();
            newPassword.clear();
            newConfirmPassword.clear();

            // sending the input value , new password is empty
            newPassword.sendKeys('');
            oldPassword.sendKeys(testPassword);
            newConfirmPassword.sendKeys('');

            // expect that the form is invalid and the button is disabled
            expect(changePasswordForm.getText()).toContain('false');
            expect((changeButton).getAttribute('disabled')).toBeTruthy();
        });

        //Testing button isDisabled if newPassword and newConfirmPassword are empty
        it('Should be disabled if newPassword and newConfirmPassword are empty >>>', function () {

            // example of password
            var testPassword = 'myPassword';

            //clear the input value before
            oldPassword.clear();
            newPassword.clear();
            newConfirmPassword.clear();

            // sending the input value , new password is empty
            newPassword.sendKeys('');
            oldPassword.sendKeys(testPassword);
            newConfirmPassword.sendKeys('');

            // expect that the form is invalid and the button is disabled
            expect(changePasswordForm.getText()).toContain('false');
            expect((changeButton).getAttribute('disabled')).toBeTruthy();
        });

        //Testing button isDisabled if newPassword and oldPassword are empty
        it('Should be disabled if newPassword and oldPassword are empty >>>', function () {

            // example of password
            var testPassword = 'myPassword';

            //clear the input value before
            oldPassword.clear();
            newPassword.clear();
            newConfirmPassword.clear();

            // sending the input value , new password is empty
            newPassword.sendKeys('');
            oldPassword.sendKeys('');
            newConfirmPassword.sendKeys(testPassword);

            // expect that the form is invalid and the button is disabled
            expect(changePasswordForm.getText()).toContain('false');
            expect((changeButton).getAttribute('disabled')).toBeTruthy();
        });


    });

    //  * Define a regexp pattern and fill random values, button disabled
    describe('Testing isDisabled with a regexp pattern >>>', function () {

        //example of password is match pattern
        var testPassword = 'myPassword';

        // example of password not match pattern
        var testPasswordNotMatch = '123myPassword';

        //Testing button isDisabled if newConfirmPassword is not match pattern
        it('Should be disabled if newConfirmPassword is not match pattern >>>', function () {

            //clear the input value before
            oldPassword.clear();
            newPassword.clear();
            newConfirmPassword.clear();

            // sending the input value and newConfirmPassword is not match pattern
            newConfirmPassword.sendKeys(testPasswordNotMatch);
            oldPassword.sendKeys(testPassword);
            newPassword.sendKeys(testPasswordNotMatch);

            // expect that the form is invalid and the button is disabled
            expect(changePasswordForm.getText()).toContain('false');
            expect((changeButton).getAttribute('disabled')).toBeTruthy();
        });

        //Testing button isDisabled if newPassword is not match pattern
        it('Should be disabled if newPassword is not match pattern >>>', function () {

            //clear the input value before
            oldPassword.clear();
            newPassword.clear();
            newConfirmPassword.clear();

            // sending the input value , newPassword is not match pattern
            newPassword.sendKeys(testPasswordNotMatch);
            oldPassword.sendKeys(testPassword);
            newConfirmPassword.sendKeys(testPassword);

            // expect that the form is invalid and the button is disabled
            expect(changePasswordForm.getText()).toContain('false');
            expect((changeButton).getAttribute('disabled')).toBeTruthy();
        });

        //Testing button isDisabled if oldPassword is not match pattern
        it('Should be disabled if oldPassword is not match pattern >>>', function () {

            //clear the input value before
            oldPassword.clear();
            newPassword.clear();
            newConfirmPassword.clear();

            // sending the input value , old password is not match pattern
            oldPassword.sendKeys(testPasswordNotMatch);
            newPassword.sendKeys(testPassword);
            newConfirmPassword.sendKeys(testPassword);

            // expect that the form is invalid and the button is disabled
            expect(changePasswordForm.getText()).toContain('false');
            expect((changeButton).getAttribute('disabled')).toBeTruthy();
        });

        //Testing button isDisabled if oldPassword and newPassword are not match pattern
        it('Should be disabled if oldPassword and newPassword are not match pattern >>>', function () {

            //clear the input value before
            oldPassword.clear();
            newPassword.clear();
            newConfirmPassword.clear();

            // sending the input value , oldPassword and newPassword are not match pattern
            oldPassword.sendKeys(testPasswordNotMatch);
            newPassword.sendKeys(testPasswordNotMatch);
            newConfirmPassword.sendKeys(testPassword);

            // expect that the form is invalid and the button is disabled
            expect(changePasswordForm.getText()).toContain('false');
            expect((changeButton).getAttribute('disabled')).toBeTruthy();
        });

        //Testing button isDisabled if oldPassword and newConfirmPassword are not match pattern
        it('Should be disabled if oldPassword and newConfirmPassword are not match pattern >>>', function () {

            //clear the input value before
            oldPassword.clear();
            newPassword.clear();
            newConfirmPassword.clear();

            // sending the input value , oldPassword and newConfirmPassword are not match pattern
            oldPassword.sendKeys(testPasswordNotMatch);
            newPassword.sendKeys(testPassword);
            newConfirmPassword.sendKeys(testPasswordNotMatch);

            // expect that the form is invalid and the button is disabled
            expect(changePasswordForm.getText()).toContain('false');
            expect((changeButton).getAttribute('disabled')).toBeTruthy();
        });

        //Testing button isDisabled if newConfirmPassword and newPassword are not match pattern
        it('Should be disabled if newConfirmPassword and newPassword are not match pattern >>>', function () {

            //clear the input value before
            oldPassword.clear();
            newPassword.clear();
            newConfirmPassword.clear();

            // sending the input value , newConfirmPassword and newPassword are not match pattern
            oldPassword.sendKeys(testPassword);
            newPassword.sendKeys(testPasswordNotMatch);
            newConfirmPassword.sendKeys(testPasswordNotMatch);

            // expect that the form is invalid and the button is disabled
            expect(changePasswordForm.getText()).toContain('false');
            expect((changeButton).getAttribute('disabled')).toBeTruthy();
        });

        //Testing button isDisabled if the three input filed are not match pattern
        it('Should be disabled if the three input filed are not match pattern >>>', function () {

            //clear the input value before
            oldPassword.clear();
            newPassword.clear();
            newConfirmPassword.clear();

            // sending the input value , the three input filed are not match pattern
            oldPassword.sendKeys(testPasswordNotMatch);
            newPassword.sendKeys(testPasswordNotMatch);
            newConfirmPassword.sendKeys(testPasswordNotMatch);

            // expect that the form is invalid and the button is disabled
            expect(changePasswordForm.getText()).toContain('false');
            expect((changeButton).getAttribute('disabled')).toBeTruthy();
        });

    });

    //  * Fill with correct values with wrong password and expect button is enabled
    describe('Testing isEnable with a correct value in the three filed', function () {

        /**
         * Define a string that match the pattern
         * and make the disable attributes of input filed equal to false
         * and respect the min length and the max length
         */
        var testPassword = 'HelloProxym';
        var testPassword2 = 'helpdeskProxym';

        // Testing if the form is valide and the button is enable
        it('Should be enable if the three value are correct >>> ', function () {

            //clear the input value before
            oldPassword.clear();
            newPassword.clear();
            newConfirmPassword.clear();

            // sending the input value and newConfirmPassword is not match pattern
            newConfirmPassword.sendKeys(testPassword);
            oldPassword.sendKeys(testPassword2);
            newPassword.sendKeys(testPassword2);

            // expect that the form is invalid and the button is disabled
            expect(changePasswordForm.getText()).toContain('true');
            expect((changeButton).getAttribute('disabled')).toBeFalsy();
            changeButton.click();
        });

    });

    //  * Test click with wrong password , button is enabled
    describe('Testing wrong when password is wrong and button is enable >>> ', function () {

        /**
         * Define a string that match the pattern
         * and make the disable attributes of input filed equal to false
         * and respect the min length and the max length
         * @ errorMessage : contain the error message
         */

        var testPassword = 'HelloProxym';
        var testPassword2 = 'helpdeskProxym';
        var testPassword3 = 'TrimechHabib';


        //  * expect to get an error message when the old password is wrong
        it('Should return an error message when the old password is wrong >>>', function () {

            //clear the input value before
            oldPassword.clear();
            newPassword.clear();
            newConfirmPassword.clear();

            // sending the input value and newConfirmPassword is match pattern
            newConfirmPassword.sendKeys(testPassword);
            oldPassword.sendKeys(testPassword2);
            newPassword.sendKeys(testPassword3);

            // expect that the form is invalid and the button is disabled
            expect(changePasswordForm.getText()).toContain('true');
            expect((changeButton).getAttribute('disabled')).toBeFalsy();
            changeButton.click();
            expect(errorMessage.getText()).toContain('invalid input : old password is wrong');
        });

        //  * expect to get an error message the new password not equal to new confirm password
        it('Should return an error message when the new password not equal to new confirm password >>>', function () {

            //clear the input value before
            oldPassword.clear();
            newPassword.clear();
            newConfirmPassword.clear();

            // sending the input value and newConfirmPassword is match pattern
            oldPassword.sendKeys('ProxymHelpdesk');
            newPassword.sendKeys(testPassword3);
            newConfirmPassword.sendKeys(testPassword2);

            // expect that the form is invalid and the button is disabled
            expect(changePasswordForm.getText()).toContain('true');
            expect((changeButton).getAttribute('disabled')).toBeFalsy();
            changeButton.click();
            expect(user.getText()).toContain(' {"name":"ProxymIT","userPassword":"ProxymHelpdesk","oldPassword":"ProxymHelpdesk","newPassword":"TrimechHabib","newConfirmPassword":"helpdeskProxym"}');
            expect(errorMessage.getText()).toContain('invalid input : new password and confirm password are not the same');
        });

    });

    //  * expect to change successfully the password
    it('Should change the user password', function () {

        //clear the input value before
        oldPassword.clear();
        newPassword.clear();
        newConfirmPassword.clear();

        // sending the input value and newConfirmPassword is match pattern
        oldPassword.sendKeys('ProxymHelpdesk');
        newPassword.sendKeys('testPassword');
        newConfirmPassword.sendKeys('testPassword');

        // expect that the form is invalid and the button is disabled
        expect(changePasswordForm.getText()).toContain('true');
        expect((changeButton).getAttribute('disabled')).toBeFalsy();
        changeButton.click();
        expect(user.getText()).toContain(' {"name":"ProxymIT","userPassword":"testPassword","oldPassword":"ProxymHelpdesk","newPassword":"testPassword","newConfirmPassword":"testPassword"}');
        expect(errorMessage.getText()).toContain('password changed >>> do something');
    });



    // fill values with all possible case and see if the button changed (with login combined , TDD) ????


});
