import React from 'react';
import { LangOptions } from '../components/inputs/PhoneInput/types';
export declare const useLocale: () => {
    locale: string;
    setLocale: (_locale: LangOptions) => void;
};
export declare const LocaleProvider: ({ children }: {
    children: any;
}) => React.JSX.Element;
