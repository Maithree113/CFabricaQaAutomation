import {Locator, Page} from "@playwright/test";

export class counterBannerSection {
    private page: Page;
    private counterBannerSection: Locator;
    private counterBannerTitle: Locator;
    private counterBannerDetails: Locator;

    constructor(page: Page) {
        this.page = page;
        this.counterBannerSection = page.locator("//div[@id='js-counter-banner']");
        this.counterBannerTitle = page.locator("//div[@id='product-banner-title']");
        this.counterBannerDetails = page.locator("//div[@class='banner-details']/p")
    }

    async isCounterBannerSectionVisible(): Promise<boolean> {
        return await this.counterBannerSection.isVisible();
    }

    async getCounterBannerTitleValue(): Promise<string> {
        return await this.counterBannerTitle.textContent() ?? '';
    }

    async getBannerDetailsValue(): Promise<string> {
        return await this.counterBannerDetails.textContent() ?? '';
    }
}