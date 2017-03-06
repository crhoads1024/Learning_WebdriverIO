/*
*************JAVASCRIPT SELENIUM CODE******************


var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('simple programmer');
driver.findElement(webdriver.By.name('btnG')).click();
driver.quit();



*/
 
 
//***************MOCHA FRAMEWORK TEST****************** 
//*************A framework like TestNG****************** 
//***To organize the tests to be run by the TestRunner***

var assert = require('assert');
var browser = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();  
var webdriver = require('selenium-webdriver');

describe('webdriver.io page', function() {

	it('should have the right title', function() {
		
		browser.url('/');
		var title = browser.getTitle();
		assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for node.js');
		});
	});