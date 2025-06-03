import {Locator, Page} from "@playwright/test";

export class moreFromThisDesignerSection {

    private moreFromDesignerSection: Locator;
    private moreFromDesignerTitle: Locator;
    private page: Page;

    constructor(page: Page) {
        this.page = page;
        this.moreFromDesignerTitle = page.locator("//div[@class='col-sm-12 row u-mt-40']/h3");
        this.moreFromDesignerSection = page.locator("//div[@class='row row-cards-2 u-mt-20']/div");
    }

    async getMoreFromDesignerTitle(): Promise<string> {
        return await this.moreFromDesignerTitle.textContent() ?? '';
    }

    async getMoreFromDesignerSection(): Promise<Locator> {
        return this.moreFromDesignerSection;
    }
}