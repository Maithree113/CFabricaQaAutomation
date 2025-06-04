import {ChristmasTreeBundlePage} from "@pages/ChristmasTreeBundlePage";
import {test as baseTest } from '@playwright/test';
import {ProductPage} from "@common/ProductPage";

const test = baseTest.extend<{
    christmasTreeBundlePage: ChristmasTreeBundlePage;
    productPage: ProductPage

}>({
    christmasTreeBundlePage:async ({ page }, use) => await use(new ChristmasTreeBundlePage(page)),
    productPage:async ({ page }, use) => await use(new ProductPage(page)),
})

export default test;