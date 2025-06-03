import {expect, Locator, Page} from "@playwright/test";

export class ChristmasTreeBundlePage {
    private page: Page;
    private productImage: Locator;
    private productDescription: Locator;
    private productHeader: Locator;
    private pageHeader: Locator;
    private reviewSideBar: Locator;
    private breadCrumb: Locator;
    private breadCrumbActiveItem: Locator;
    private socialButtons: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeader = page.locator('//h1[@id="product-title"]');
        this.productImage = page.locator("//img[@class='fotorama__img']");
        this.productDescription = page.locator("//div[@id='single-product-description']");
        this.productHeader = page.locator("//h2[@class='c-headline c-headline--h3']");
        this.reviewSideBar = page.locator("//div[@class='col-md-4 bar-review']");
        this.breadCrumb = page.locator("//ul[@class='c-breadcrumb__list']");
        this.breadCrumbActiveItem =page.locator("//ul[@class='c-breadcrumb__list']/li[@class='c-breadcrumb__item c-breadcrumb__item--active']");
        this.socialButtons = page.locator("//ul[@class='social-buttons']/a");
    }

    async navigateToMainPage() {
        await this.page.goto("/product/christmas-tree-lantern-bundle/");
    }

    async getPageHeaderValue(): Promise<string> {
        return await this.pageHeader.textContent() ?? '';
    }

    async getProductHeaderValue(): Promise<string> {
        return await this.productHeader.textContent() ?? '';
    }

    async getProductDescriptionValue(): Promise<string> {
        return await this.productDescription.textContent() ?? '';
    }

    public async matchScreenshot(image: any): Promise<void> {
        expect(await this.page.screenshot()).toMatchSnapshot(image);
    }

    async getSocialButtons(): Promise<Locator> {
        return this.socialButtons;
    }

    async isBreadCrumbVisible(): Promise<boolean> {
        return await this.breadCrumb.isVisible();
    }

    async getActiveBreadCrumbValue(): Promise<string> {
        return await this.breadCrumbActiveItem.textContent() ?? '';
    }

    async getAllProductImages(): Promise<Locator> {
        return this.productImage;
    }

    async isReviewSideBarVisible(): Promise<boolean> {
        return await this.reviewSideBar.isVisible();
    }
}