Feature: Search form dropdown lists saved addresses from the user profile

    In order to have a better experience
    User is provided with his saved addresses as suggestions

    Background: User opens Takeaway site
        Given that User navigates to https://www.thuisbezorgd.nl/en
        And User logs in to site

    Scenario: User finds the restaurant by selecting a saved address
        When User accesses the search form
        Then User sees his saved addresses