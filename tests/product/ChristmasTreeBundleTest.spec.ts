import test from '@base/base';
import {expect} from "@playwright/test";

test.describe("Validate Christmas Tree Bundle Page",{ tag: '@Smoke'},() => {
    test.beforeEach(async ({ christmasTreeBundlePage }) => {
        await christmasTreeBundlePage.navigateToMainPage()
    });

    test("Validate product Title, BreadCrumb, review, social tag and  Image", async ({christmasTreeBundlePage}) => {

        //validate product title
        expect(await christmasTreeBundlePage.getPageHeaderText()).toMatch("Christmas Tree Lantern Bundle");

        //validate breadcrumb
        expect(await christmasTreeBundlePage.isBreadCrumbVisible()).toBe(true);
        expect(await christmasTreeBundlePage.getActiveBreadCrumbText()).toMatch("Christmas Tree Lantern Bundle");

        //validate image and social button counts
        const counts = await christmasTreeBundlePage.getCounts();
        expect(counts.productImages).toBeGreaterThan(0);
        expect(counts.socialButtons).toBe(2);

        //validate review sidebar
        expect(await christmasTreeBundlePage.isReviewSideBarVisible()).toBe(true);

        //validate product image
        const productImage = await christmasTreeBundlePage.getAllProductImages();
        await expect(productImage.first()).toBeVisible();
        await expect(productImage.first()).toHaveAttribute('alt', /Christmas Tree Lantern Bundle Graphic/i);
    })

    test('validate product description and designer info', async ({christmasTreeBundlePage}) => {

        expect(await christmasTreeBundlePage.isFollowDesignerButton()).toBe(true);
        expect(await christmasTreeBundlePage.getDesignerNameText()).toMatch("CuttingLineStore");
        expect(await christmasTreeBundlePage.isDesignerProfileLink()).toBe(true);
        expect(await christmasTreeBundlePage.getProductDescriptionText()).toContain("Welcome to our Christmas Tree Paper Lantern! This unique and festive lantern template will add a little holiday magic to your home decor");
    });

    test('validate product tags', async ({christmasTreeBundlePage}) => {
        //validate product tags

        const elements = await christmasTreeBundlePage.getDesignerTags()
        const expectedText = 'Lantern Template';

        const texts = await Promise.all((await elements.all()).map((el: {
            textContent: () => any;
        }) => el.textContent()));
        const matched = texts.some((text: string | string[]) => text?.includes(expectedText));

        expect(matched).toBe(true);

        expect(await christmasTreeBundlePage.getDesignerTagTitleText()).toMatch("Designer tags");
    });

    test('validate product favorite info', async ({christmasTreeBundlePage}) => {
       // Verify favourite content
        const favouriteElements = christmasTreeBundlePage.favouriteElements;

        await expect(favouriteElements.list).toBeVisible();
        await expect(favouriteElements.title).toContainText("Added to favorites");
        await expect(favouriteElements.button).toBeVisible();
    });

    test('should display counter banner correctly', async ({christmasTreeBundlePage}) => {
        // Verify counter banner is loaded
        await christmasTreeBundlePage.verifyCounterBannerLoaded();

        // Get counter banner content
        const bannerContent = await christmasTreeBundlePage.getCounterBannerContent();

        expect(bannerContent.isVisible).toBe(true);
        expect(bannerContent.title).toMatch("Christmas Tree Lantern Bundle")
        expect(bannerContent.details).toContain("3D Christmas / Graphics");
    });

    test('visual regression test', async ({christmasTreeBundlePage}) => {
        // Wait for everything to load
        await christmasTreeBundlePage.verifyPageLoaded();
        await christmasTreeBundlePage.verifyCounterBannerLoaded();
        await christmasTreeBundlePage.verifyDesignerSectionLoaded();

        // Take screenshot
        await christmasTreeBundlePage.matchScreenshot('christmas-tree-bundle-complete.png');
    });

})