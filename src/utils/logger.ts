export class Logger {
    static info(message: string) {
        console.log(`[INFO] ${this.timestamp()} - ${message}`);
    }

    static warn(message: string) {
        console.warn(`[WARN] ${this.timestamp()} - ${message}`);
    }

    static error(message: string) {
        console.error(`[ERROR] ${this.timestamp()} - ${message}`);
    }

    private static timestamp(): string {
        return new Date().toISOString();
    }
}