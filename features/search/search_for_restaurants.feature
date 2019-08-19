Feature: Search restaurants by address details

    In order to find a restaurant to order from
    User Is able to search by postcode, or place

    Background: User opens Takeaway site
        Given that User navigates to https://www.thuisbezorgd.nl/en

    Scenario: User finds the restaurant by submiting a postcode to search form
        When User submits the search form with 1012AB
        Then User sees search results for his address

    Scenario: User finds the restaurant by selecting a suggested address
        When User fills the search form with Prins Hendrikkade 86, Amsterdam
        And User selects a suggestion
        Then User sees search results for his address

    Scenario: User finds the restaurant by selecting a saved address
        Given User logs in to site
        And User selects a saved address
        Then User sees search results for his address

    Scenario: User is prompted by a notification on invalid post code search attempt
        When User submits the search form with Prins Hendrikkade 86, Amsterdam
        Then User sees invalid post code notification
