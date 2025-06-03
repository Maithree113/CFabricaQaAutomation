import { expect, Locator, Page, Response } from '@playwright/test';

export type SEOIssue = {
    issue: string;
    value?: string | null;
    severity: 'error' | 'warning';
};

export async function validateImageSEO(
    page: Page,
    locator: Locator,
    options?: {
        expectedAltContains?: string;
        expectedFileNameContains?: string;
        logOnly?: boolean; // if true, logs issues without failing tests
    }
): Promise<SEOIssue[]> {
    const issues: SEOIssue[] = [];

    // Visibility
    try {
        await expect(locator).toBeVisible();
    } catch {
        issues.push({ issue: 'Image is not visible', severity: 'error' });
    }

    // alt attribute
    const alt = await locator.getAttribute('alt');
    if (!alt || alt.length < 4) {
        issues.push({ issue: 'Missing or unhelpful alt text', value: alt, severity: 'error' });
    } else if (options?.expectedAltContains && !alt.toLowerCase().includes(options.expectedAltContains.toLowerCase())) {
        issues.push({ issue: 'Alt text does not contain expected keyword', value: alt, severity: 'warning' });
    }

    // src check
    const src = await locator.getAttribute('src');
    if (!src) {
        issues.push({ issue: 'Missing src attribute', severity: 'error' });
    } else {
        if (!/\.(jpg|jpeg|png|webp|svg)$/i.test(src)) {
            issues.push({ issue: 'Non-SEO-friendly image format', value: src, severity: 'warning' });
        }
        if (src.startsWith('data:')) {
            issues.push({ issue: 'Image is base64 inline, not recommended for SEO', value: src, severity: 'warning' });
        }
        if (options?.expectedFileNameContains && !src.toLowerCase().includes(options.expectedFileNameContains.toLowerCase())) {
            issues.push({ issue: 'Filename does not include expected keyword', value: src, severity: 'warning' });
        }
    }

    // Image load check
    try {
        const isLoaded = await locator.evaluate(img =>
            (img as HTMLImageElement).complete && (img as HTMLImageElement).naturalWidth > 0
        );
        if (!isLoaded) {
            issues.push({ issue: 'Image did not fully load', severity: 'error' });
        }
    } catch {
        issues.push({ issue: 'Failed to evaluate image loading', severity: 'warning' });
    }

    // HTTP check for image request
    if (src) {
        const imageUrl = new URL(src, page.url()).toString();
        let imageResponse: Response | undefined;

        const responseHandler = (response: Response) => {
            try {
                if (response.url() === imageUrl) {
                    imageResponse = response;
                }
            } catch {
                // skip
            }
        };

        page.on('response', responseHandler);
        page.off('response', responseHandler); // remove listener after delay

        if (!imageResponse) {
            issues.push({ issue: 'Image URL was not requested or was served from cache', value: imageUrl, severity: 'warning' });
        } else {
            const status = imageResponse.status();
            if (status >= 400) {
                issues.push({ issue: `Image URL returned ${status}`, value: imageUrl, severity: 'error' });
            }
        }
    }

    // Lazy-loading detection
    const loadingAttr = await locator.getAttribute('loading');
    if (loadingAttr === 'lazy') {
        issues.push({ issue: 'Image uses lazy loading (check for <noscript> fallback)', severity: 'warning' });
    }

    // <picture> fallback (if inside <picture>)
    const tagName = await locator.evaluate(node => node.tagName);
    if (tagName === 'IMG') {
        const parentTag = await locator.evaluate(node => node.parentElement?.tagName);
        if (parentTag === 'PICTURE') {
            const hasFallback = await locator.evaluate(img =>
                !!img.parentElement?.querySelector('source') && !!img.getAttribute('src')
            );
            if (!hasFallback) {
                issues.push({ issue: 'Picture element missing fallback <img>', severity: 'warning' });
            }
        }
    }

    // Report issues or fail test
    if (options?.logOnly) {
        console.table(issues);
    } else {
        for (const issue of issues.filter(i => i.severity === 'error')) {
            throw new Error(`SEO Image Issue: ${issue.issue} - ${issue.value ?? ''}`);
        }
    }

    return issues;
}
