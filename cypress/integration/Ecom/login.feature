Feature: Visit the Practics automation test site
@focus
    Scenario: Visit the Practics automation test site
        Given Visit the Practics automation test site
        When Enter valid username and password
            | username        | password   |
            | nik22@gmail.com | Nikigan@22 |
        Then click on login button
        And You see the dashborad


    # Scenario Outline: Visit the Practics automation test site
    #     Given Visit the Practics automation test site
    #     When Enter valid "<username>" and "<password>"
    #     Then click on login button
    #     And valid the dashborad with string name 


    #     Examples:
    #         | username        | password   |
    #         | nik22@gmail.com | Nikigan@22 |
    #         | nik22@gmail.com | Nikigan@22 |
    #         | nik22@gmail.com | Nikigan@22 |