/**
 * protractor.conf.js
 * @author  TrimecheMH
 * @Copyright Proxym-it
 * Created at 2/11/2016
 * Last update at "change me"
 * Module Configuration of protractor
 * write your description here !!!
 */
exports.config = {
    directConnect: true, // Use directConnect to connect to Chrome or Firefox directly.
    selemniumAdress: 'http://localhost:3000/', // Where to talk to your Selenium Server

    /**
     * Capabilities to be passed to the webdriver instance.
     */
    capabilities: {
        'browserName': 'chrome'
    },

    /* multiCapabilities: [{
        'browserName': 'firefox'
    }, {
        'browserName': 'chrome'
    }],*/

    /**
     * Framework to use. Jasmine is recommended.
     */
    framework: 'jasmine',

    /**
     * Spec patterns are relative to the current working directly when
     * protractor is called.
     */
    specs: ['./e2e/*.spec.js'],

    /**
     * onPrepare function for configuration of the report files
     * and the screen shot tests result
     */
    onPrepare: function () {

        // configuration to Get a jasmine reportes for the  test executed
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './test/report/protractor',
            filePrefix: 'xmloutput'
        }));
        // we will add this code to activate the protractor screens shot reporter
        var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
        var time = Date.now();
        jasmine.getEnv().addReporter(
            new HtmlScreenshotReporter({
                dest: './test/report/protractor/screen/' + time,
                filename: 'my-report.html'
            })
        );
    },

    /**
     * Options to be passed to Jasmine.
     */
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 5000 // set the timeout for responding
    }
};
