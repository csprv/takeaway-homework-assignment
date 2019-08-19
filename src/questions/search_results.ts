import { Task, See } from "serenity-js/lib/screenplay";
import { Is, Wait, Text } from "serenity-js/lib/serenity-protractor";
import { SearchResults, MainPage } from "../ui"

import chai = require('chai');
import chaipromissed = require('chai-as-promised');
chai.use(chaipromissed);

const expect = chai.expect;


export const InvalidPostCodeNotification = () => Task.where('#actor should see the invalid post code notification',
    Wait.until(MainPage.Invalid_Post_Code_Notification, Is.visible()),
);

export const OnSearchResultsFor = (address: string) => Task.where('#actor should see that he is on search result page',
    Wait.until(SearchResults.Address_Button, Is.visible()),
    Wait.until(SearchResults.Found_Restaurants_List, Is.visible()),
    See.if(Text.of(SearchResults.Address_Button), text => expect(text).to.eventually.include(address))
);