import {Locator, expect, Page} from '@playwright/test';
import { BasePage } from '@base/BasePage'
import { PageSelectors } from '@pages/PageSelectors';

export class ProductPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }
    // Product elements
    private get pageHeader(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.PAGE_HEADER);
    }

    private get productImage(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.PRODUCT_IMAGE);
    }

    private get productDescription(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.PRODUCT_DESCRIPTION);
    }

    private get productHeader(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.PRODUCT_HEADER);
    }

    private get reviewSideBar(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.REVIEW_SIDEBAR);
    }

    private get breadCrumb(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.BREADCRUMB);
    }

    private get breadCrumbActiveItem(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.BREADCRUMB_ACTIVE);
    }

    private get socialButtons(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.SOCIAL_BUTTONS);
    }

    // Counter banner elements
    private get counterBannerSection(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.COUNTER_BANNER_SECTION);
    }

    private get counterBannerTitle(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.COUNTER_BANNER_TITLE);
    }

    private get counterBannerDetails(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.COUNTER_BANNER_DETAILS);
    }

    // Designer elements
    private get followDesignerButton(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.FOLLOW_DESIGNER_BUTTON);
    }

    private get designerName(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.DESIGNER_NAME);
    }

    private get designerProfileLink(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.DESIGNER_PROFILE_LINK);
    }

    private get designerTagTitle(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.DESIGNER_TAG_TITLE);
    }

    private get designerTagsList(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.DESIGNER_TAGS_LIST);
    }

    // Favourite elements
    private get favouriteButton(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.FAVOURITE_BUTTON);
    }

    private get favouriteList(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.FAVOURITE_LIST);
    }

    private get favouriteTitle(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.FAVOURITE_TITLE);
    }

    // Section elements
    private get productFeatureSection(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.PRODUCT_FEATURE_SECTION);
    }

    private get reviewSection(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.REVIEW_SECTION);
    }

    private get reviewList(): Locator {
        return this.page.locator(PageSelectors.CHRISTMAS_TREE_BUNDLE.REVIEW_LIST);
    }

    // Basic text content methods
    async getPageHeaderText(): Promise<string> {
        return this.getTextContent(this.pageHeader);
    }

    async getProductHeaderText(): Promise<string> {
        return this.getTextContent(this.productHeader);
    }

    async getProductDescriptionText(): Promise<string> {
        return this.getTextContent(this.productDescription);
    }

    async getActiveBreadCrumbText(): Promise<string> {
        return this.getTextContent(this.breadCrumbActiveItem);
    }

    // Counter banner methods
     async getCounterBannerTitleText(): Promise<string> {
        return this.getTextContent(this.counterBannerTitle);
    }

     async getCounterBannerDetailsText(): Promise<string> {
        return this.getTextContent(this.counterBannerDetails);
    }

     async isCounterBannerVisible(): Promise<boolean> {
        return this.isElementVisible(this.counterBannerSection);
    }

    // Designer methods
    async getDesignerNameText(): Promise<string> {
        return this.getTextContent(this.designerName);
    }

    async getDesignerTagTitleText(): Promise<string> {
        return this.getTextContent(this.designerTagTitle);
    }

    async isFollowDesignerButton(): Promise<boolean> {
        return this.isElementVisible(this.followDesignerButton);
    }

    async isDesignerProfileLink(): Promise<boolean> {
        return this.isElementVisible(this.designerProfileLink);
    }

    protected async getDesignerTagsCount(): Promise<number> {
        return this.getElementCount(this.designerTagsList);
    }

    // Favourite methods
    async getFavouriteTitleText(): Promise<string> {
        return this.getTextContent(this.favouriteTitle);
    }

    async isFavouriteButtonVisible(): Promise<boolean> {
        return this.isElementVisible(this.favouriteButton);
    }

     async isFavouriteListVisible(): Promise<boolean> {
        return this.isElementVisible(this.favouriteList);
    }

    // Visibility methods
    async isBreadCrumbVisible(): Promise<boolean> {
        return this.isElementVisible(this.breadCrumb);
    }

    async isReviewSideBarVisible(): Promise<boolean> {
        return this.isElementVisible(this.reviewSideBar);
    }

    async isReviewSectionVisible(): Promise<boolean> {
        return this.isElementVisible(this.reviewSection);
    }

    // Element access methods
    async getSocialButtons(): Promise<Locator> {
        return this.socialButtons;
    }

    async getDesignerTags(): Promise<Locator> {
        return this.designerTagsList;
    }

    async getAllProductImages(): Promise<Locator> {
        return this.productImage;
    }

    get designerElements(): {
        followButton: Locator;
        name: Locator;
        profileLink: Locator;
        tagTitle: Locator;
        tagsList: Locator;
    } {
        return {
            followButton: this.followDesignerButton,
            name: this.designerName,
            profileLink: this.designerProfileLink,
            tagTitle: this.designerTagTitle,
            tagsList: this.designerTagsList
        };
    }

    get favouriteElements(): {
        button: Locator;
        list: Locator;
        title: Locator;
    } {
        return {
            button: this.favouriteButton,
            list: this.favouriteList,
            title: this.favouriteTitle
        };
    }

    // Batch operations for performance

    async getCounterBannerContent(): Promise<{
        title: string;
        details: string;
        isVisible: boolean;
    }> {
        const [title, details, isVisible] = await Promise.all([
            this.getTextContent(this.counterBannerTitle),
            this.getTextContent(this.counterBannerDetails),
            this.isElementVisible(this.counterBannerSection)
        ]);

        return {title, details, isVisible};
    }

    async getCounts(): Promise<{
        productImages: number;
        socialButtons: number;
        designerTags: number;
        reviewList: number;
        productFeatures: number;
    }> {
        const [productImages, socialButtons, designerTags, reviewList, productFeatures] = await Promise.all([
            this.getElementCount(this.productImage),
            this.getElementCount(this.socialButtons),
            this.getElementCount(this.designerTagsList),
            this.getElementCount(this.reviewList),
            this.getElementCount(this.productFeatureSection)
        ]);

        return {productImages, socialButtons, designerTags, reviewList, productFeatures};
    }

    // Screenshot method
    async matchScreenshot(imageName: string): Promise<void> {
        await expect(this.page).toHaveScreenshot(imageName);
    }

    // Page validation methods
    async waitForPageToLoad(): Promise<void> {
        await Promise.all([
            this.waitForElement(this.pageHeader),
            this.waitForElement(this.productImage.first()),
            this.waitForElement(this.productDescription)
        ]);
    }

    async verifyPageLoaded(): Promise<void> {
        await this.assertElementVisible(this.pageHeader);
        await this.assertElementVisible(this.productDescription);
        await this.assertElementVisible(this.breadCrumb);
    }

    async verifyDesignerSectionLoaded(): Promise<void> {
        await this.assertElementVisible(this.designerName);
        await this.assertElementVisible(this.followDesignerButton);
    }

    async verifyCounterBannerLoaded(): Promise<void> {
        await this.assertElementVisible(this.counterBannerSection);
        await this.assertElementVisible(this.counterBannerTitle);
    }
}