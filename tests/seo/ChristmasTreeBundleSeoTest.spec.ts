import test from '@base/base';
import {expect} from "@playwright/test";
import {validateImageSEO} from "@utils/imageSeoUtil";
import {validatePageSEO} from "@utils/pageLevelSeoUtil";
import {runLighthouseAudit} from "@utils/lighthouseUtil";

test.describe("SEO Validation for Christmas Tree Bundle Page",{ tag: '@SEO'},() => {
  test.beforeEach(async ({ christmasTreeBundlePage }) => {
    await christmasTreeBundlePage.navigateToMainPage()
  });

  test('SEO checks: Full SEO test with Lighthouse', async ({ christmasTreeBundlePage, page }) => {

    //Image SEO checks
    const imageLocators = await christmasTreeBundlePage.getAllProductImages()

    let imageIssues: any[] = [];

    for (const imgLocator of await imageLocators.all()) {
      const imageIssue = await validateImageSEO(page, imgLocator, {
        expectedAltContains: 'Christmas Tree',
        expectedFileNameContains: 'christmas-tree',
        logOnly: true
      });
      imageIssues.push(...imageIssue);
    }
    console.log('All Image SEO Issues:', imageIssues);

    //page SEO checks
    const pageIssues = await validatePageSEO(page, { logOnly: true });
    console.log('Page SEO Issues:', pageIssues);

    const pageErrors = [...imageIssues, ...pageIssues].filter(i => i.severity === 'error');
    expect(pageErrors.length, `Found ${pageErrors.length} SEO error(s)`).toBe(0);

    //Lighthouse integration for SEO checks
    await runLighthouseAudit(page, { logOnly: true });
  })
});