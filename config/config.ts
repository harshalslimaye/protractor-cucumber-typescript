import { browser, Config } from "protractor";

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
    compiler: "ts:ts-node/register",
    require: ["../stepdefinitions/*.js"]
  }
};
