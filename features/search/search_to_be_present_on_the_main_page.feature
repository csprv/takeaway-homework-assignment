Feature: Search form is present on the main page of any Takeaway site

    In order to search for restaurants
    User should be provided with the search form on the main page

    Scenario Outline: User sees the search restaurants form on the main page
        Given that User navigates to <takeaway_site>
        Then User sees the search form

        Examples:
            | takeaway_site                 |
            | https://www.thuisbezorgd.nl/  |
            | https://www.lieferando.de/    |
            | https://www.lieferservice.at/ |

