import React, { FunctionComponent } from 'react';
type Props = React.ComponentProps<any> & {
    fr: Record<string, string>;
    en: Record<string, string>;
};
export declare const LocalizationProvider: FunctionComponent<Props>;
export {};
