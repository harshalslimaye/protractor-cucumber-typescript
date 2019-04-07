Feature: Testing Calculator

    @Calculator
    Scenario: Testing Addition
        Given go to "https://juliemr.github.io/protractor-demo/"
        When first number is "1"
        When second number is "2"
        When operation to be performed is "+"
        When operation in progress
        Then output should be "3"
