import {ProductPage} from "@common/ProductPage";
import {Page} from "@playwright/test";

export class ChristmasTreeBundlePage extends ProductPage {
    private static readonly URL = '/product/christmas-tree-lantern-bundle/';

    constructor(page: Page) {
        super(page);
    }

    async navigateToMainPage(): Promise<void> {
        await this.navigateToUrl(ChristmasTreeBundlePage.URL);
    }
}