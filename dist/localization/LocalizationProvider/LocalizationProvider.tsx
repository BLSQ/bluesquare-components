import React, { FunctionComponent, useMemo } from 'react';
/* eslint-disable import/no-relative-packages */
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider as MuiLocaleProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { IntlProvider } from 'react-intl';

import { useLocale } from '../useLocale';

type Props = React.ComponentProps<any> & {
    fr: Record<string, string>;
    en: Record<string, string>;
};

export const LocalizationProvider: FunctionComponent<Props> = ({
    children,
    fr,
    en,
}) => {
    const messages = useMemo(() => {
        return {
            fr,
            en,
        };
    }, [fr, en]);
    const { locale } = useLocale();
    const onError = msg => console.warn(msg);
    return (
        <IntlProvider
            onError={onError}
            key={locale}
            locale={locale}
            messages={messages[locale]}
        >
            <MuiLocaleProvider
                dateAdapter={AdapterMoment}
                adapterLocale={locale}
            >
                {children}
            </MuiLocaleProvider>
        </IntlProvider>
    );
};
