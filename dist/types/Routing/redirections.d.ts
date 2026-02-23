export type RedirectFn = (url: string, params?: Record<string, string | undefined>) => void;
export declare const useRedirectTo: () => RedirectFn;
export declare const useRedirectToReplace: () => RedirectFn;
export declare const useGoBack: (fallBackUrl?: string, nested?: boolean) => (() => void);
