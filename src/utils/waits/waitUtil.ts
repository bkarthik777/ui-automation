import { TIMEOUTS } from '../../constants/timeouts';
import type { ChainablePromiseElement } from 'webdriverio';
import { browser } from '@wdio/globals';
/**
 * Centralized wait utility
 * All waits must go through this class
 */
export class WaitUtil {

    static async forDisplayed(
        element: ChainablePromiseElement,
        timeout: number = TIMEOUTS.UI.MEDIUM
    ): Promise<void> {
        await element.waitForDisplayed({
            timeout,
            timeoutMsg: 'Element was not displayed within timeout'
        });
    }

    static async forClickable(
        element: ChainablePromiseElement,
        timeout: number = TIMEOUTS.UI.MEDIUM
    ): Promise<void> {
        await element.waitForClickable({
            timeout,
            timeoutMsg: 'Element was not clickable within timeout'
        });
    }

    static async forEnabled(
        element: ChainablePromiseElement,
        timeout: number = TIMEOUTS.UI.MEDIUM
    ): Promise<void> {
        await element.waitForEnabled({
            timeout,
            timeoutMsg: 'Element was not enabled within timeout'
        });
    }

    static async until(
        condition: () => Promise<boolean>,
        timeout: number = TIMEOUTS.POLLING.MAX_WAIT,
        interval: number = TIMEOUTS.POLLING.INTERVAL
    ): Promise<void> {
        await browser.waitUntil(condition, {
            timeout,
            interval,
            timeoutMsg: 'Condition was not met within timeout'
        });
    }
}
