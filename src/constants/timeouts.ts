

export const TIMEOUTS = {
    UI: {
        SHORT: 3000,    // small DOM updates, minor re-renders
        MEDIUM: 8000,   // normal page interactions
        LONG: 15000     // slow UI, heavy pages
    },

    API: {
        SHORT: 5000,    // fast backend response
        MEDIUM: 10000,  // async processing
        LONG: 30000     // background jobs / eventual consistency
    },

    POLLING: {
        INTERVAL: 500,  // how often we poll
        MAX_WAIT: 30000 // total time allowed for polling
    }
} as const;