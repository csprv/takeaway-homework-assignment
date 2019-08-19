import { Task, PerformsTasks } from "serenity-js/lib/screenplay";
import { Open, UseAngular } from "serenity-js/lib/serenity-protractor";

export class Navigate implements Task {
    private url: string;

    static to(site: string) {
        return new Navigate(site)
    }

    performAs(actor: PerformsTasks) {
        return actor.attemptsTo(
            UseAngular.disableSynchronisation(),
            Open.browserOn(this.url),

        )
    }

    constructor(site: string) {
        this.url = site;
    }
}