Feature: Visit the GreenKart to add the item in Kart site
@focus
    Scenario: Visit the GreenKart site
        Given Visit the GreenKart site to purches vegetable
        When Enter the first letter ca in search vegetable tab
        And select the carrot and place the order
        Then select the country and check the checkbox and we see the thank you message
        And You see the thank you message  

    Scenario: Visit the GreenKart site
        Given Visit the GreenKart site to purches vegetable
        When Enter the first letter "ca" in search vegetable tab
        And select the "carrot" and place the order
        Then select the country and check the checkbox and we see the thank you message
        And You see the thank you message  