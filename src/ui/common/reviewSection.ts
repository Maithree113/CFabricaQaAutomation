import {Locator, Page} from "@playwright/test";

export class reviewSection {
    private page: Page;
    private reviewSection: Locator;
    private reviewList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.reviewSection = page.locator("//div[@id='review-section']//div/h3");
        this.reviewList = page.locator("//div[@class='review-list']//div[@class='col-md-6']");
    }

    async getReviewTitle(): Promise<string> {
        return await this.reviewSection.textContent() ?? '';
    }

    async getReviewList(): Promise<Locator> {
        return this.reviewList;
    }
}