import { Config } from "protractor";
import * as reporter from 'cucumber-html-reporter';

export const config: Config = {
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    browserName: "chrome"
  },
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["../../features/*.feature"],
  cucumberOpts: {
    format: "json:./report.json",
    compiler: "ts:ts-node/register",
    require: ["../stepdefinitions/*.js"],
  },
  onComplete: () => {
    reporter.generate({
      theme: "bootstrap",
      jsonFile: "report.json",
      output: "report.html",
      reportSuiteAsScenarios: true,
      launchReport: true
    });
  }
};
