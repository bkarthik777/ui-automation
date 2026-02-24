
/// <reference types="@wdio/globals/types" />

export class ScreenshotUtil {
    static async capture(fileName: string) {
        try {
            const dir = './screenshots';
            const path = `${dir}/${fileName}.png`;

            // Ensure directory exists (safe even if it already exists)
            await browser.saveScreenshot(path);
        } catch (error) {
            console.error('[SCREENSHOT ERROR]', error);
        }
    }
}