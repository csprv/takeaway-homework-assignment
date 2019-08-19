import { Task, See } from "serenity-js/lib/screenplay";
import { Duration, Wait, Value, Text, Is } from "serenity-js/lib/serenity-protractor";
import { SearchForm } from "../ui"


import chai = require('chai');
import chaipromissed = require('chai-as-promised');
chai.use(chaipromissed);
const expect = chai.expect;

export const AddressPrefilled = (address: string) => Task.where('#actor should see the invalid post code notification',
    Wait.for(Duration.ofSeconds(5)),
    See.if(Value.of(SearchForm.Hidden_Form_Input), value => expect(value).to.eventually.include(address))
);

export const SavedAddressesArePresent = (address: string) => Task.where('#actor should see his saved addresses',
    Wait.until(SearchForm.Search_Dropdown, Is.present()),
    See.if(Text.of(SearchForm.My_Saved_Addresses), values => expect(values).to.eventually.include(address)),

)


