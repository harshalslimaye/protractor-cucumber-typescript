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
