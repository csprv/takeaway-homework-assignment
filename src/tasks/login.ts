import { Task } from "serenity-js/lib/screenplay";
import { Click, Wait, Is, Enter } from "serenity-js/lib/serenity-protractor";
import { MainPage, MyAccount } from "../ui"

var user = require("../../assets/user");

export const Login = () => Task.where('#actor selects an address',
    Wait.until(MainPage.My_Account, Is.visible()),
    Click.on(MainPage.My_Account),
    Wait.until(MyAccount.Login_Button_On_Accoont, Is.visible()),
    Click.on(MyAccount.Login_Button_On_Accoont),
    Wait.until(MyAccount.Email_Input, Is.visible()),
    Enter.theValue(user.email).into(MyAccount.Email_Input),
    Enter.theValue(user.password).into(MyAccount.Password_Input),
    Click.on(MyAccount.Login_Button_On_Form),
    Wait.until(MyAccount.Logount_Button, Is.visible()),
    Click.on(MyAccount.Close_Modal)
);
