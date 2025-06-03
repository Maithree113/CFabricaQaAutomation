import {Locator, Page} from "@playwright/test";

export class designerInfoSection {
    private page: Page;
    private followDesignerButton:Locator;
    private designerName: Locator;
    private designerProfileLink:Locator;

    constructor(page: Page) {
        this.page = page;
        this.followDesignerButton = page.locator("//button[@data-amplitude-location='pdp follow designer button']");
        this.designerName = page.locator("//h2[@class='c-headline c-headline--h4 u-bold u-mb-0']/a/span");
        this.designerProfileLink = page.locator("//p[@class='c-paragraph u-mb-20']/a");
    }

    async isFollowDesignerButtonVisible(): Promise<boolean> {
        return await this.followDesignerButton.isVisible();
    }

    async getDesignerNameValue(): Promise<string> {
        return await this.designerName.textContent() ?? '';
    }

    async getDesignerProfileLink(): Promise<string> {
        return await this.designerProfileLink.textContent() ?? '';
    }
}