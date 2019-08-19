import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class MainPage {
    static Search_Form = Target.the("Search form input").located(by.xpath('//form[@id="ideliveryareaform"]'));

    static Invalid_Post_Code_Notification = Target.the("Invalid post code notification").located(by.xpath('//div[@id="ideliveryareaerror"]'))

    static My_Account = Target.the("My account").located(by.xpath('//button[@class="menu button-myaccount userlogin"]'))
}