import { TextField } from '@mui/material';
import React, { FunctionComponent } from 'react';
import ReactPhoneInput from 'react-phone-input-material-ui';
import fr from 'react-phone-input-material-ui/lang/fr.json';
import pt from 'react-phone-input-material-ui/lang/pt.json';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import MESSAGES from './messages';
import { BaseCountryData, LangOptions } from './types';

type Props = {
    onlyCountries?: string[];
    preferredCountries?: string[];
    excludeCountries?: string[];
    country?: string | number;
    lang?: LangOptions;
    className?: string;
    value?: string | null; // See if we can manage undefined
    // eslint-disable-next-line no-unused-vars
    onChange: (value: string, countryData?: BaseCountryData) => void;
    disabled?: boolean;
    required?: boolean;
    label?: string;
};
const getLocalization = (lang?: LangOptions) => {
    if (lang === 'en' || !lang) return undefined;
    if (lang === 'fr') return fr;
    if (lang === 'pt') return pt;
    return undefined;
};

export const PhoneInput: FunctionComponent<Props> = props => {
    const { formatMessage } = useSafeIntl();
    const { lang, onChange, className, label, ...restProps } = props;
    const localization = getLocalization(lang);
    return (
        <ReactPhoneInput
            component={TextField}
            searchPlaceholder={formatMessage(MESSAGES.search)}
            searchNotFound={formatMessage(MESSAGES.countryNotFound)}
            localization={localization}
            onChange={(value, countryData) => {
                const { dialCode, countryCode }: BaseCountryData = countryData;
                const baseCountryData: BaseCountryData = {
                    dialCode,
                    countryCode,
                };
                onChange(value, baseCountryData);
            }}
            label={label}
            inputClass={className}
            {...restProps}
        />
    );
};
