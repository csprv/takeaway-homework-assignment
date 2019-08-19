import { browser } from "protractor"

export = function () {

    this.After(function () {
        browser.manage().deleteAllCookies();
    });
};