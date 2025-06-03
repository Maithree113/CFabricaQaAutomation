import {Locator, Page} from "@playwright/test";

export class footerSection {

    private page: Page;
    private footerSection: Locator;

    constructor(page: Page) {
        this.page = page;
        this.footerSection = page.locator("//footer[@id='colophon']");
    }

    async isFooterSectionVisible(): Promise<boolean> {
        return await this.footerSection.isVisible();
    }
}