import { expect,Page, Locator } from '@playwright/test';

export abstract class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Common utility methods all pages can use
    protected async getTextContent(locator: Locator): Promise<string> {
        return (await locator.textContent()) ?? '';
    }

    protected async isElementVisible(locator: Locator): Promise<boolean> {
        return locator.isVisible();
    }

    protected async getElementCount(locator: Locator): Promise<number> {
        return locator.count();
    }

    protected async waitForElement(locator: Locator): Promise<void> {
        await locator.waitFor();
    }

    protected async clickElement(locator: Locator): Promise<void> {
        await locator.click();
    }

    protected async typeIntoElement(locator: Locator, text: string): Promise<void> {
        await locator.fill(text);
    }

    // Common wait methods
    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
    }

    async waitForDOMContentLoaded(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
    }

    // Common navigation helper
    protected async navigateToUrl(url: string): Promise<void> {
        await this.page.goto(url);
        await this.waitForPageLoad();
    }

    // Common screenshot methods
    async takeScreenshot(options?: { fullPage?: boolean }): Promise<Buffer> {
        return this.page.screenshot(options);
    }

    // Common assertion helpers
    protected async assertElementVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }

    protected async assertElementHidden(locator: Locator): Promise<void> {
        await expect(locator).toBeHidden();
    }

    protected async assertTextContent(locator: Locator, expectedText: string): Promise<void> {
        await expect(locator).toHaveText(expectedText);
    }
}