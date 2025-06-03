import {Locator, Page} from "@playwright/test";

export class peopleAlsoViewedSection {
    private peopleViewedSection: Locator;
    private peopleViewedList: Locator;
    private page: Page;

    constructor(page: Page) {
        this.page = page;
        this.peopleViewedSection = page.locator("//h3[@id='people-also-viewed']");
        this.peopleViewedList = page.locator("//div[@class='row row-cards-4']/div");
    }

    async getPeopleAlsoViewedTitle(): Promise<string> {
        return await this.peopleViewedSection.textContent() ?? '';
    }

    async getPeopleAlsoViewedList(): Promise<Locator> {
        return this.peopleViewedList;
    }
}