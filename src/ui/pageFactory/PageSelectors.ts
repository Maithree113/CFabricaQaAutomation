// Selector factory for better maintainability
export class PageSelectors {
    static readonly CHRISTMAS_TREE_BUNDLE = {
        // Product elements
        PAGE_HEADER: '#product-title',
        PRODUCT_IMAGE: '.fotorama__img',
        PRODUCT_DESCRIPTION: '#single-product-description',
        PRODUCT_HEADER: '.c-headline.c-headline--h3',
        REVIEW_SIDEBAR: '.col-md-4.bar-review',
        BREADCRUMB: '.c-breadcrumb__list',
        BREADCRUMB_ACTIVE: '.c-breadcrumb__list .c-breadcrumb__item--active',
        SOCIAL_BUTTONS: '.social-buttons a',

        // Counter banner elements
        COUNTER_BANNER_SECTION: '#js-counter-banner',
        COUNTER_BANNER_TITLE: '#product-banner-title',
        COUNTER_BANNER_DETAILS: '.banner-details p',

        // Designer elements
        FOLLOW_DESIGNER_BUTTON: '[data-amplitude-location="pdp follow designer button"]',
        DESIGNER_NAME: '.c-headline.c-headline--h4.u-bold.u-mb-0 a span',
        DESIGNER_PROFILE_LINK: '.c-paragraph.u-mb-20 a',
        DESIGNER_TAG_TITLE: '.u-ml-10 h3',
        DESIGNER_TAGS_LIST: '.u-pl-10 div',

        // Favourite elements
        FAVOURITE_BUTTON: '[data-amplitude-location="pdp favorite button"]',
        FAVOURITE_LIST: '.col-12.c-block--favorite-users.u-mb-10',
        FAVOURITE_TITLE: '.favorite-count-text.u-uppercase.u-bold.u-gray',

        // Section elements
        GRAPHIC_HEADER_SECTION: '.c-headline.c-headline--h4.u-bold.u-uppercase.u-mb-10 h4',
        PRODUCT_PROMOTION_SECTION: '.c-product-box--product-detail-box.u-mt-20.u-px-20 div h4',
        PRODUCT_FEATURE_SECTION: '.c-product-feature-section li h4',
        REVIEW_SECTION: '#review-section div h3',
        REVIEW_LIST: '.review-list .col-md-6',
        POST_PROJECT: '#promo-upsell-popup',
        SHARE_PRODUCT_TITLE: '.section-title'
    } as const;
}
