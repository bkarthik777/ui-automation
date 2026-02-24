export class RetryClassifier {
    static isRetryable(error?: Error): boolean {
        if (!error) return false;

        const message = error.message.toLowerCase();

        const retryablePatterns = [
            'stale element reference',
            'element not clickable',
            'element not interactable',
            'timeout'
        ];

        return retryablePatterns.some(pattern =>
            message.includes(pattern)
        );
    }
}