import { WaitUtil } from '../waits/waitUtil';
import { TIMEOUTS } from '../../constants/timeouts';
import type { ChainablePromiseElement } from 'webdriverio';

/**
 * Safe user actions with built-in waits and retries
 * Tests and pages must use these instead of raw WDIO actions
 */
export class SafeActions {

    /**
     * Safely click an element with wait + retry
     */
    static async click(
        element: ChainablePromiseElement,
        timeout: number = TIMEOUTS.UI.MEDIUM
    ): Promise<void> {
        try {
            await WaitUtil.forClickable(element, timeout);
            await element.click();
        } catch (error) {
            // one controlled retry
            await WaitUtil.forClickable(element, TIMEOUTS.UI.LONG);
            await element.click();
        }
    }

    /**
     * Safely set value with visibility + enabled check
     */
    static async setValue(
        element: ChainablePromiseElement,
        value: string,
        timeout: number = TIMEOUTS.UI.MEDIUM
    ): Promise<void> {
        await WaitUtil.forDisplayed(element, timeout);
        await WaitUtil.forEnabled(element, timeout);

        await element.clearValue();
        await element.setValue(value);
    }

    /**
     * Safe getText (ensures element is visible)
     */
    static async getText(
        element: ChainablePromiseElement,
        timeout: number = TIMEOUTS.UI.MEDIUM
    ): Promise<string> {
        await WaitUtil.forDisplayed(element, timeout);
        return element.getText();
    }
}
