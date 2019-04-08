<div style="text-align:center">
    <img alt="Protractor" src="https://raw.githubusercontent.com/harshal-limaye/protractor-cucumber-typescript/master/images/protractor.png">
</div>

# Protractor Cucumber TypeScript

**This project is a barebones implementation of Protractor with Cucumber framework using TypeScript.**

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