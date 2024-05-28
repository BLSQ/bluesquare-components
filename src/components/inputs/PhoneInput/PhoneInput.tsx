import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { FunctionComponent } from 'react';
import ReactPhoneInput from 'react-phone-input-material-ui';
import 'react-phone-input-material-ui/lib/style.css';
import fr from 'react-phone-input-material-ui/lang/fr.json';
import pt from 'react-phone-input-material-ui/lang/pt.json';
import classnames from 'classnames';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import MESSAGES from './messages';
import { BaseCountryData, LangOptions } from './types';

const useStyles = makeStyles(theme => ({
    inputMargin: {
        '& .MuiInputBase-input': {
            // @ts-ignore
            marginLeft: `${theme.spacing(1)} !important`,
        },
    },
    dropdownMargin: {
        '& > .flag-dropdown': {
            // @ts-ignore
            marginLeft: `${theme.spacing(1)} !important`,
        },
    },
}));

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
    placeholder?: string;
    autoFormat?: boolean;
    countryCodeEditable?: boolean;
    dataTestId?: string;
};
const getLocalization = (lang?: LangOptions) => {
    if (lang === 'en' || !lang) return undefined;
    if (lang === 'fr') return fr;
    if (lang === 'pt') return pt;
    return undefined;
};

export const PhoneInput: FunctionComponent<Props> = props => {
    const { formatMessage } = useSafeIntl();
    const {
        lang,
        onChange,
        className,
        label,
        country,
        placeholder,
        required,
        disabled,
        autoFormat = false,
        countryCodeEditable = false,
        ...restProps
    } = props;
    const localization = getLocalization(lang);
    const classes: Record<string, string> = useStyles();

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
            autoFormat={autoFormat}
            inputClass={classes.inputMargin}
            inputProps={{ required, disabled }}
            containerClass={classnames(classes.dropdownMargin, className)}
            country={country}
            countryCodeEditable={countryCodeEditable}
            placeholder={placeholder ?? formatMessage(MESSAGES.phoneNumber)}
            {...restProps}
        />
    );
};
