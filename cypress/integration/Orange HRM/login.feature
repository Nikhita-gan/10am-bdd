Feature: Visit the Orange HRM site

    Scenario: Visit Orange HRM site with valid creaditial
        Given Visit the Orange HRM site
        When Enter valid username
        And Enter valid password
        Then click on login button
        And You see the dashborad

    Scenario: Visit Orange HRM site with Invalid creaditial
        Given Visit the Orange HRM site
        When Enter Invalid username
        And Enter Invalid password
        Then click on login button
        And You see error message