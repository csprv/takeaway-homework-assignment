import {
    Navigate,
    SelectFromSuggestion,
    SelectFromSaved,
    Login, SearchFor,
    EnterSearchTerm,
    AccessInput
} from '../../src/tasks'

import {
    OnSearchResultsFor,
    InvalidPostCodeNotification,
    AddressPrefilled,
    SavedAddressesArePresent,
    SearchFormPresence
} from '../../src/questions'

var user = require("../../assets/user");
export = function searchSteps() {

    let searchedAddress: string;

    this.Given(/^that (.*) navigat.* to (.*)$/, function (name: string, site: string) {
        return this.stage.theActorCalled(name).attemptsTo(
            Navigate.to(site)
        )
    });

    this.Given(/^.* logs in to site$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            Login()
        )
    });


    this.When(/^.* submit.* the search form with (.*)$/, function (address: string) {
        searchedAddress = address;
        return this.stage.theActorInTheSpotlight().attemptsTo(
            SearchFor(address)
        )
    });

    this.When(/^.* fill.* the search form with (.*)$/, function (address: string) {
        searchedAddress = address;
        return this.stage.theActorInTheSpotlight().attemptsTo(
            EnterSearchTerm(address)
        )
    });

    this.When(/^.* access.* the search form$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            AccessInput()
        )
    });

    this.When(/^.* select.* a suggestion$/, function () {

        return this.stage.theActorInTheSpotlight().attemptsTo(
            SelectFromSuggestion(searchedAddress)
        )
    });

    this.When(/^.* select.* a saved address$/, function () {
        searchedAddress = user.address;
        return this.stage.theActorInTheSpotlight().attemptsTo(
            SelectFromSaved(searchedAddress)
        )
    });

    this.Then(/^.* see.* search results for his address$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            OnSearchResultsFor(searchedAddress)
        )
    });

    this.Then(/^.* see.* invalid post code notification$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            InvalidPostCodeNotification()
        )
    });

    this.Then(/^.* see.* the search form$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            SearchFormPresence()
        )
    });

    this.Then(/^.* see.* his recent searched address prefilled$/, function () {

        return this.stage.theActorInTheSpotlight().attemptsTo(
            AddressPrefilled(searchedAddress)
        )
    });

    this.Then(/^.* see.* his saved addresses$/, function () {

        return this.stage.theActorInTheSpotlight().attemptsTo(
            SavedAddressesArePresent(user.address)
        )
    });
}
