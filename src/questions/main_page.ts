import { Task } from "serenity-js/lib/screenplay";
import { Is, Wait, } from "serenity-js/lib/serenity-protractor";
import { MainPage } from "../ui"

export const SearchFormPresence = () => Task.where('#actor should see the invalid post code notification',
    Wait.until(MainPage.Search_Form, Is.visible()),
);


