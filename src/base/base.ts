import {ChristmasTreeBundlePage} from "@pages/ChristmasTreeBundlePage";
import { TestInfo, test as baseTest } from '@playwright/test';
import {counterBannerSection} from "@common/counterBannerSection";
import {designerInfoSection} from "@common/designerInfoSection";
import {designerTagsSection} from "@common/designerTagsSection";
import {favoriteSection} from "@common/favoriteSection";
import {footerSection} from "@common/footerSection";
import {moreFromThisDesignerSection} from "@common/moreFromThisDesignerSection";
import {peopleAlsoViewedSection} from "@common/peopleAlsoViewedSection";
import {promoSection} from "@common/promoSection";
import {reviewSection} from "@common/reviewSection";
import {shareProjectSection} from "@common/shareProjectSection";

const test = baseTest.extend<{
    christmasTreeBundlePage: ChristmasTreeBundlePage;
    counterBannerSection: counterBannerSection
    designerInfoSection: designerInfoSection
    designerTagsSection: designerTagsSection
    favouriteSection: favoriteSection
    footerSection: footerSection
    moreFromThisDesignerSection: moreFromThisDesignerSection
    peopleAlsoViewedSection: peopleAlsoViewedSection
    promoSection: promoSection
    reviewSection: reviewSection
    shareProjectSection: shareProjectSection

}>({
    christmasTreeBundlePage:async ({ page }, use) => await use(new ChristmasTreeBundlePage(page)),
    counterBannerSection:async ({ page }, use) => await use(new counterBannerSection(page)),
    designerInfoSection:async ({ page }, use) => await use(new designerInfoSection(page)),
    designerTagsSection:async ({ page }, use) => await use(new designerTagsSection(page)),
    favouriteSection:async ({ page }, use) => await use(new favoriteSection(page)),
    footerSection:async ({ page }, use) => await use(new footerSection(page)),
    moreFromThisDesignerSection:async ({ page }, use) => await use(new moreFromThisDesignerSection(page)),
    peopleAlsoViewedSection:async ({ page }, use) => await use(new peopleAlsoViewedSection(page)),
    promoSection:async ({ page }, use) => await use(new promoSection(page)),
    reviewSection:async ({ page }, use) => await use(new reviewSection(page)),
    shareProjectSection:async ({ page }, use) => await use(new shareProjectSection(page)),
})

export default test;