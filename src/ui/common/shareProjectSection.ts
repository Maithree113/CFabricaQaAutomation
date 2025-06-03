import {Locator, Page} from "@playwright/test";

export class shareProjectSection {
    private page: Page;
    private postProject: Locator;
    private shareProductTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.postProject = page.locator("//button[@id='promo-upsell-popup']");
        this.shareProductTitle = page.locator("//h4[@class='section-title']");
    }

    async isPostProjectButtonVisible(): Promise<boolean> {
        return await this.postProject.isVisible();
    }

    async getShareProductValue(): Promise<string> {
        return await this.shareProductTitle.textContent() ?? '';
    }

    async clickPostProject() {
        await this.postProject.click();
    }
}