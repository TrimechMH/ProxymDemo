## Proxym demo testing

### Created by :
``` TRIMECH Mohamed Habib ```

### Supervised by :
``` GRISSA Mohamed Ali ```

> This is an example of End-To-End Testing for change password behavior. 
>> The tool used to test is Protractor.
>>> Protractor is an end-to-end test framework for AngularJS applications. 
>>>> Protractor runs tests against your application running in a real browser, interacting with it as a user would.


## Prerequisites

* Node js  [node.js]
* NPM
* Protractor


#### Protractor and Selenium web driver installation
##### Install Protractor

```npm install -g protractor ```
##### Install globally webdriver
```npm install -g webdriver-manager```

##### update webdriver-manager
```webdriver-manager update --standalone```
##### starting webdriver-manager server
```webdriver-manager start```


### Install

``` cd ProxymDemo
    npm install
```

### Running the server 

> Under the ProxymDemo Folder run the following command

``` node server.js ```


### Running the E2E tests 
``` cd test ```

> Under the test Folder run the following command

``` protractor ```


 [node.js]: <http://nodejs.org>
