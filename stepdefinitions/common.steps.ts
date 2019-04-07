import { Given } from 'cucumber';
import { browser } from 'protractor';

Given('go to {string}', async (url) => {
    await browser.get(url);
})