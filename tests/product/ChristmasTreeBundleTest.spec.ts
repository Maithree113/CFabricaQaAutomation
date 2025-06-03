import test from '@base/base';
import {expect} from "@playwright/test";


test.describe("Validate Christmas Tree Bundle Page",{ tag: '@Smoke'},() => {
    test.beforeEach(async ({ christmasTreeBundlePage }) => {
        await christmasTreeBundlePage.navigateToMainPage()
    });

    test("Validate product Title, BreadCrumb and Image", async ({christmasTreeBundlePage,page}) => {

        expect(await christmasTreeBundlePage.getPageHeaderValue()).toMatch("Christmas Tree Lantern Bundle");
        expect(await christmasTreeBundlePage.isBreadCrumbVisible()).toBe(true);
        expect(await christmasTreeBundlePage.getActiveBreadCrumbValue()).toMatch("Christmas Tree Lantern Bundle");
        const productImage = await christmasTreeBundlePage.getAllProductImages();
        await expect(productImage.first()).toBeVisible();
        await expect(productImage.first()).toHaveAttribute('alt', /Christmas Tree Lantern Bundle Graphic/i);
    })

    test('validate product description and designer info', async ({ designerInfoSection,christmasTreeBundlePage }) => {
        expect(await designerInfoSection.isFollowDesignerButtonVisible()).toBe(true);
        expect(await designerInfoSection.getDesignerNameValue()).toMatch("CuttingLineStore");
        expect(await designerInfoSection.getDesignerProfileLink()).toMatch("View profile");
        expect(await christmasTreeBundlePage.getProductDescriptionValue()).toContain("Welcome to our Christmas Tree Paper Lantern! This unique and festive lantern template will add a little holiday magic to your home decor");
    });

    test('validate product tags', async ({ designerTagsSection }) => {
        const elements = await designerTagsSection.getDesignerTagsList();
        const expectedText = 'Lantern Template';

        const texts = await Promise.all((await elements.all()).map(el => el.textContent()));
        const matched = texts.some(text => text?.includes(expectedText));
        expect(matched).toBe(true);
        expect(await designerTagsSection.getDesignerTagTitleValue()).toMatch("Designer tags");
    });

    test('validate product favorite info', async ({ favouriteSection }) => {
        await expect(await favouriteSection.getFavouriteList()).toBeVisible()
        expect(await favouriteSection.getFavouriteTitleValue()).toMatch("Added to favorites");
        expect(await favouriteSection.isFavouriteButtonVisible()).toBe(true);
    });

})
