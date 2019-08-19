import { Task } from "serenity-js/lib/screenplay";
import { Click, Wait, Is } from "serenity-js/lib/serenity-protractor";
import { SearchForm } from "../ui"

export const SelectFromSuggestion = (address: string) => Task.where('#actor selects an address',
    Wait.until(SearchForm.Search_Dropdown, Is.present()),
    Wait.until(SearchForm.Suggested_Address(address), Is.visible()),
    Click.on(SearchForm.Suggested_Address(address))
);

export const SelectFromSaved = (address: string) => Task.where('#actor selects an address',
    Wait.until(SearchForm.Search_Dropdown, Is.present()),
    Click.on(SearchForm.Search_Form_Input),
    Wait.until(SearchForm.My_Saved_Address(address), Is.visible()),
    Click.on(SearchForm.My_Saved_Address(address))
);