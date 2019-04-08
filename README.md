<div style="text-align:center">
    <img alt="Protractor" src="https://raw.githubusercontent.com/harshal-limaye/protractor-cucumber-typescript/master/images/protractor.png">
</div>

# Protractor Cucumber TypeScript

**This project is a barebones implementation of Protractor with Cucumber framework using TypeScript.**

## Prerequisistes
1. [NodeJS](https://nodejs.org/en/download/)
2. Web Browser - Chrome/Firefox
3. Code Editor - Visual Studio Code/Atom/Sublime

## Setup
1. Open your terminal / command prompt
2. Clone the repository to your computer
```
git clone https://github.com/harshal-limaye/protractor-cucumber-typescript.git
```
3. Navigate to the repository and run following command.
```
npm install
```
> This will install all the dependencies mentioned in the ```package.json``` file and copy them inside node_modules folder.

## Usage
Use the following command to download the necessary binaries.
```
npm run driver-update
```
Next, to start the Selenium server use the following command.
```
npm run driver-start
```
And finally run following command to start the test
```
npm test
```

## Folders
1. **features** - used to store .feature files.
```
Feature: Testing Calculator

    @Calculator
    Scenario Outline: Testing All Functions
        Given go to "https://juliemr.github.io/protractor-demo/"
        When first number is "<n1>"
        When second number is "<n2>"
        When operation to be performed is "<op>"
        When operation in progress
        Then output should be "<ot>"

    Examples:
    | n1 | n2 | op | ot |
    | 2  | 4  | +  | 6  |
    | 8  | 3  | -  | 5  |
    | 2  | 5  | *  | 10 |
    | 25 | 5  | /  | 5  |
    | 10 | 3  | %  | 1  |
```

2. **stepdefinitions** -  contains step definition files in typescript format.
```
import { Given } from 'cucumber';
import { browser } from 'protractor';

Given('go to {string}', async (url) => {
    await browser.get(url);
})
```
3. **pages** - used to store page objects
```
import { by, element, ElementFinder } from "protractor";

export class CalcPage {
  firstNumber: ElementFinder;
  secondNumber: ElementFinder;
  operator: ElementFinder;
  button: ElementFinder;
  results: any;

  constructor() {
    this.firstNumber = this.getElByModel("first");
    this.secondNumber = this.getElByModel("second");
    this.operator = this.getElByModel("operator");
    this.button = element(by.id("gobutton"));
    this.results = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"))
  }

  getElByModel(modelName) {
    return element(by.model(modelName));
  }
}
```

## Reports
This project uses [Cucumber HTML Reporter](https://github.com/gkushang/cucumber-html-reporter) package to generate reports. It generates a two files report.json and report.html at the root of this repository each time ```npm test``` command is fired.

You can change the report file names and there locations by simply updating configuration object passed to ***reporter.generate*** method inside config.ts file located inside config folder.

## Notes
### Change browser
Out-of-the-box this project uses chrome as to run the tests, however you could easily change it to Firefox by updating capabilities inside config.ts file.

```
capabilities: {
    browserName: "chrome"
}
```