declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'consent' | 'event' | 'set',
      targetId: string | 'update',
      config?: Record<string, unknown>
    ) => void;
  }
}

export {};
