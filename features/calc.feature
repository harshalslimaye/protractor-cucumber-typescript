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