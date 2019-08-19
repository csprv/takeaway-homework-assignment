import { Task } from "serenity-js/lib/screenplay";
import { Enter, Click, Wait, Is } from "serenity-js/lib/serenity-protractor";
import { SearchForm } from "../ui"


export const EnterSearchTerm = (address: string) => Task.where('#actor enters the search term',
    Enter.theValue(address).into(SearchForm.Search_Form_Input)
);

export const ClickSearch = () => Task.where('#actor clicks on search button',
    Click.on(SearchForm.Search_Form_Submit_Button)
);

export const AccessInput = () => Task.where('#actor clicks on search button',
    Click.on(SearchForm.Search_Form_Input)
);

export const SearchFor = (address: string) => Task.where('#actor searches for restaurants by address',
    EnterSearchTerm(address),
    Wait.until(SearchForm.Search_Dropdown, Is.present()),
    ClickSearch()
);