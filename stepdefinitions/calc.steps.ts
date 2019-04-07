import { Before, Then, When } from 'cucumber';
import { by, element } from 'protractor';
import { CalcPage } from '../pages/calc.page';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
let page: CalcPage;

Before({ tags: '@Calculator' }, () => {
    page = new CalcPage();
});

When('first number is {string}', async (num) => {
    await page.firstNumber.sendKeys(num);
});

When('second number is {string}', async (num) => {
    await page.secondNumber.sendKeys(num);
});

When('operation to be performed is {string}', async (operator) => {
    await page.operator.sendKeys(operator);
});

When('operation in progress', async () => {
    await page.button.click();
});

Then('output should be {string}', async (results) => { 
    await expect(page.results.getText()).to.eventually.equal(results);
});