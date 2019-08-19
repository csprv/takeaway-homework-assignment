Feature: Search form remembers last used address

        In order to minimize time spent on main page
        Takeaway remembers last search address of a User
        And prefills the search form with it on the next site access

    Background: User opens Takeaway site
        Given that User navigates to https://www.thuisbezorgd.nl/en


    Scenario: User has a prefilled search form with post code on return
        Given User submits the search form with 1012AB
        And User sees search results for his address
        When that User navigates to https://www.thuisbezorgd.nl/en
        Then User sees his recent searched address prefilled


    #Didn't got to the point where the address string is taken from to prefill the search form. Leaving this test as Failing
    Scenario: User has a prefilled search form with address on return
        Given User fills the search form with Prins Hendrikkade 86, Amsterdam
        And User selects a suggestion
        And User sees search results for his address
        When that User navigates to https://www.thuisbezorgd.nl/en
        Then User sees his recent searched address prefilled