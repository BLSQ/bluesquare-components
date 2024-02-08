import { FunctionComponent } from 'react';
import { BaseCountryData, LangOptions } from './types';
type Props = {
    onlyCountries?: string[];
    preferredCountries?: string[];
    excludeCountries?: string[];
    country?: string | number;
    lang?: LangOptions;
    className?: string;
    value?: string | null;
    onChange: (value: string, countryData?: BaseCountryData) => void;
    disabled?: boolean;
    required?: boolean;
};
export declare const PhoneInput: FunctionComponent<Props>;
export {};
