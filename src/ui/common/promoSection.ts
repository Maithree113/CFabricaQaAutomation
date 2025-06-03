import {Locator, Page} from "@playwright/test";

export class promoSection {
    private productPromotionSection: Locator;
    private productFeatureSection: Locator;
    private graphicHeaderSection: Locator;
    private page: Page;

    constructor(page: Page) {
        this.page = page;
        this.graphicHeaderSection = page.locator("//div[@class='c-headline c-headline--h4 u-bold u-uppercase u-mb-10']/h4");
        this.productPromotionSection = page.locator("//div[@class='c-product-box--product-detail-box u-mt-20 u-px-20']/div/h4");
        this.productFeatureSection = page.locator("//ul[@class='c-product-feature-section']/li/h4");
    }

    async getGraphicHeaderValue(): Promise<string> {
        return await this.graphicHeaderSection.textContent() ?? '';
    }

    async getProductPromotionValue(): Promise<string> {
        return await this.productPromotionSection.textContent() ?? '';
    }

    async getProductFeatures(): Promise<Locator> {
        return this.productFeatureSection;
    }
}