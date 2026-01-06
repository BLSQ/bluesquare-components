import React from 'react';
import { PatchIntlShape } from '../types/types';
/**
 * same as newIjectIntl in iaso-root codebase
 * used to inject a patched version of react-intl
 *
 */
export declare const injectIntl: <P extends {
    intl: PatchIntlShape;
}>(Component: React.ComponentType<P>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<Omit<P, "intl" | "forwardedRef">> & React.RefAttributes<any>>;
