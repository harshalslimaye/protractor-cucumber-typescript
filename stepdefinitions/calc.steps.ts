import { Then, When } from 'cucumber';
import { by, element } from 'protractor';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

When('first number is {string}', async (num) => {
    await element(by.model('first')).sendKeys(num);
});

When('second number is {string}', async (num) => {
    await element(by.model('second')).sendKeys(num);
});

When('operation to be performed is {string}', async (operator) => {
    await element(by.model('operator')).sendKeys(operator);
});

When('operation in progress', async () => {
    await element(by.id('gobutton')).click();
});

Then('output should be {string}', async (results) => { 
    await expect(element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText()).to.eventually.equal(results);
});