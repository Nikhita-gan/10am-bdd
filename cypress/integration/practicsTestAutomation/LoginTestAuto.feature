Feature: Visit the PracticsTestAutomation Site

    Scenario: Visit PracticsTestAutomation Site with valid creaditial
        Given Visit the PracticsTestAutomation site
        When Enter valid username
        And Enter valid password
        Then click on submit button
        And You see the Logged In Successfully

    Scenario: Visit PracticsTestAutomation Site Invalid creaditial
        Given Visit the PracticsTestAutomation site
        When Enter Invalid username
        And Enter Invalid password
        Then click on submit button
        And You see error message