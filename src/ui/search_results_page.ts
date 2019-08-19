import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class SearchResults {
    static Address_Button = Target.the("Searched address").located(by.xpath('//button[@class="topbar__title js-header-location-update show-location"]'));

    static Found_Restaurants_Text = Target.the("Found restaurants text").located(by.xpath(""));

    static Found_Restaurants_List = Target.the("Found restaurants List").located(by.xpath('//div[@id="irestaurantlist"]'));
}