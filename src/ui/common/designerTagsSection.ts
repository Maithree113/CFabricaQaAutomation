import {Locator, Page} from "@playwright/test";

export class designerTagsSection {
    private page: Page;
    private designerTagTitle: Locator
    private designerTagsList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.designerTagTitle = page.locator("//div[@class='u-ml-10']/h3");
        this.designerTagsList = page.locator("//div[@class='u-pl-10']/div");
    }

    async getDesignerTagTitleValue(): Promise<string> {
        return await this.designerTagTitle.textContent() ?? '';
    }

    async getDesignerTagsList(): Promise<Locator> {
        return this.designerTagsList;
    }
}