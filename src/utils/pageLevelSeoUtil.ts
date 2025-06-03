import { Page, expect } from '@playwright/test';
import { SEOIssue } from './imageSeoUtil'; // reuse the type

export async function validatePageSEO(
    page: Page,
    options?: {
        logOnly?: boolean;
    }
): Promise<SEOIssue[]> {
    const issues: SEOIssue[] = [];

    try {
        const title = await page.title();
        if (!title || title.length < 30 || title.length > 60) {
            issues.push({ issue: 'Title tag missing or length not optimal (30-60 chars)', value: title, severity: 'warning' });
        }
    } catch {
        issues.push({ issue: 'Unable to fetch title tag', severity: 'warning' });
    }

    try {
        const metaDesc = await page.locator('head meta[name="description"]').getAttribute('content');
        if (!metaDesc || metaDesc.length < 70 || metaDesc.length > 160) {
            issues.push({ issue: 'Meta description missing or length not optimal (70-160 chars)', value: metaDesc, severity: 'warning' });
        }
    } catch {
        issues.push({ issue: 'Unable to fetch meta description', severity: 'warning' });
    }

    try {
        const canonical = await page.locator('head link[rel="canonical"]').getAttribute('href');
        if (!canonical || !canonical.startsWith('http')) {
            issues.push({ issue: 'Canonical tag missing or invalid', value: canonical, severity: 'warning' });
        }
    } catch {
        issues.push({ issue: 'Unable to fetch canonical tag', severity: 'warning' });
    }

    try {
        const h1Count = await page.locator('//h1').count();
        if (h1Count !== 1) {
            issues.push({ issue: `Expected exactly 1 <h1> tag, found ${h1Count}`, severity: 'error' });
        }
    } catch {
        issues.push({ issue: 'Unable to count <h1> tags', severity: 'warning' });
    }

    try {
        const ogTitle = await page.locator('head meta[property="og:title"]').getAttribute('content');
        if (!ogTitle) {
            issues.push({ issue: 'Missing Open Graph title tag (og:title)', severity: 'warning' });
        }
    } catch {
        issues.push({ issue: 'Unable to fetch Open Graph tags', severity: 'warning' });
    }

    try {
        const lang = await page.locator('//html').getAttribute('lang');
        if (!lang) {
            issues.push({ issue: 'Missing lang attribute on <html> tag', severity: 'warning' });
        }
    } catch {
        issues.push({ issue: 'Unable to check lang attribute on <html>', severity: 'warning' });
    }

    try {
        const faviconCount = await page.locator('head link[rel~="icon"]').count();
        if (faviconCount === 0) {
            issues.push({ issue: 'Missing favicon link', severity: 'warning' });
        }
    } catch {
        issues.push({ issue: 'Unable to check favicon', severity: 'warning' });
    }

    if (!options?.logOnly) {
        for (const issue of issues.filter(i => i.severity === 'error')) {
            throw new Error(`SEO Issue: ${issue.issue} - ${issue.value ?? ''}`);
        }
    } else {
        console.table(issues);
    }

    return issues;
}
