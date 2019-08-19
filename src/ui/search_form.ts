import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class SearchForm {

    static Search_Form_Input = Target.the("Search form input").located(by.xpath('//input[@id="imysearchstring"]'));

    static Hidden_Form_Input = Target.the("Search form input").located(by.xpath('//input[@id="isearchstring"]'));

    static Search_Form_Submit_Button = Target.the("Search form input").located(by.xpath('//a[@id="submit_deliveryarea"]'));

    static Search_Dropdown = Target.the("Dropdown").located(by.xpath('//div[@id="iautoCompleteDropDownContent"]'));

    static Suggested_Address = (address: string) => Target.the("My suggested address").located(by.xpath(`//div[@id="iautoCompleteDropDownContent"]/a[contains(., '${address}')]`));

    static My_Saved_Address = (address: string) => Target.the("My saved address").located(by.xpath(`//a[contains(@class, "lp__place lp__place--address")]/span[contains(., "${address}")]/..`));

    static My_Saved_Addresses = Target.the("My saved addresses records").located(by.xpath(`//a[contains(@class, "lp__place lp__place--address")]/span[2]`));
}