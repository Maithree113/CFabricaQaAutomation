import {Locator, Page} from "@playwright/test";

export class favoriteSection {
    private page: Page;
    private favouriteButton: Locator;
    private favouriteList: Locator;
    private favouriteTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.favouriteButton = page.locator("//button[@data-amplitude-location='pdp favorite button']");
        this.favouriteList = page.locator("//div[@class='col-12 c-block--favorite-users u-mb-10']");
        this.favouriteTitle = page.locator("//p[@class='favorite-count-text u-uppercase u-bold u-gray']")
    }

    async isFavouriteButtonVisible(): Promise<boolean> {
        return await this.favouriteButton.isVisible();
    }

    async getFavouriteTitleValue(): Promise<string> {
        return await this.favouriteTitle.textContent() ?? '';
    }

    async getFavouriteList(): Promise<Locator> {
        return this.favouriteList;
    }
}