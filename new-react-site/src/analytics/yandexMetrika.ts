export const YANDEX_METRIKA_ID = 110297865;

declare global {
  interface Window {
    ym?: (id: number, action: string, ...args: unknown[]) => void;
  }
}

export {};
