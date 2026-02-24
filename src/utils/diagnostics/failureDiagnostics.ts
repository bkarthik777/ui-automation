/// <reference types="@wdio/globals/types" />

export class FailureDiagnostics {
    static async capture(testTitle: string, duration: number) {
        const timestamp = new Date().toISOString().replace(/:/g, '-');

        console.log('================ FAILURE DIAGNOSTICS ================');
        console.log(`Test Name : ${testTitle}`);
        console.log(`Duration  : ${duration} ms`);

        const url = await browser.getUrl();
        console.log(`URL       : ${url}`);

        const title = await browser.getTitle();
        console.log(`Title     : ${title}`);

        await browser.saveScreenshot(
            `./screenshots/${testTitle}-${timestamp}.png`
        );

        const logs = await browser.getLogs('browser');
        console.log('Browser Logs:', logs);

        console.log('=====================================================');
    }
}