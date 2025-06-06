import { FunctionComponent } from 'react';
import 'react-phone-input-material-ui/lib/style.css';
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
    label?: string;
    placeholder?: string;
    autoFormat?: boolean;
    countryCodeEditable?: boolean;
    dataTestId?: string;
};
export declare const PhoneInput: FunctionComponent<Props>;
export {};
