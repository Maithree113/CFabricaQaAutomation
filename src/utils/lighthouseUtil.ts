import { Page } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';

export async function runLighthouseAudit(
    page: Page,
    options?: {
        thresholds?: {
            performance?: number;
            accessibility?: number;
            'best-practices'?: number;
            seo?: number;
        };
        logOnly?: boolean;
    }
): Promise<void> {
    try {
        await playAudit({
            page,
            thresholds: options?.thresholds ?? {
                performance: 40,
                accessibility: 50,
                'best-practices': 50,
                seo: 50,
            }, port: 9222,
            reports: {
                formats: {
                    html: true,
                    json: true,
                },
                name: `lighthouse-report-${Date.now()}`,
            }
        });
    } catch (e) {
        if (options?.logOnly) {
            console.warn('Lighthouse audit failed:', (e as Error).message);
        } else {
            throw e;
        }
    }
}
