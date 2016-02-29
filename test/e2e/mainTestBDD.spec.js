/**
 * mainTestBDD_spec.js 
 * @author  TrimecheMH
 * @Copyright Proxym-it 
 * Created at 2/22/2016
 * Last update at "change me"
 * Module e2e testing
 * write your description here !!!
 */

describe('Testing App Login : ', function() {
    // Base url for uses cases  test.
    var baseUrl = 'http://localhost:3000/#/login';
   // Load all pre-test requirements (componenets)
    beforeEach(function () {
        // Get base url
        browser.get(baseUrl);
    });

    // Testing the load of BaseUrl and title of the page loaded
    describe('Testing server connection >>>',  function(){
        it('should load the server on port 3000  >>>',function(){
            expect(browser.getCurrentUrl()).toEqual(baseUrl);
        });
        it('Should show the correct title  >>>',function(){
            expect(browser.getTitle()).toBe('Test');
        });
    });

    // Testing the navigation to the change password view when we click on change password button
    describe('Testing change password button  >>>',function(){
        it('Should show the change password page  >>>',function(){
            //Get button element with XPATH
            var changeButton =  element(by.css('[ng-click="changeState()"]'));
            // Clicking on the button
            changeButton.click();
            // we expect to charge the change password view
            expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/changePassword');
        });
    });

});
