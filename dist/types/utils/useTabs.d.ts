import { Dispatch, SetStateAction } from 'react';
import { Optional } from '../types/types';
type UseTabsParams<T> = {
    params?: Record<string, Optional<string>>;
    defaultTab: T;
    baseUrl?: string;
};
type UseTabsValue<T> = {
    tab: T;
    setTab: Dispatch<SetStateAction<T>>;
    handleChangeTab: (_event: any, newTab: T) => void;
};
export declare const useTabs: <T>({ params, defaultTab, baseUrl, }: UseTabsParams<T>) => UseTabsValue<T>;
export {};
