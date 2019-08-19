
import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class MyAccount {
    static Login_Button_On_Accoont = Target.the("Login button on account").located(by.xpath('//div[@id="userpanel-wrapper"]/section/section/a[@data-click="login"]'));
    static Email_Input = Target.the("Email field").located(by.xpath('//input[@id="iusername"]'));
    static Password_Input = Target.the("Password field").located(by.xpath('//input[@id="ipassword"]'));
    static Login_Button_On_Form = Target.the("Login button on form").located(by.xpath('//form[@id="icustomerloginform"]/input[@type="submit"]'))
    static Logount_Button = Target.the("Logout button").located(by.xpath('//div[@id="userpanel-wrapper"]//a[contains(text(), "Logout")]'))
    static Close_Modal = Target.the("Close My account button").located(by.xpath('//*[@id="userpanel-wrapper"]/section//button[@class="modal-close"]'))
}