import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { patchIntl } from '../localization/patchIntl';

export const useSafeIntl = () => {
    const intl = useIntl();
    // noinspection UnnecessaryLocalVariableJS
    const patchedIntl = useMemo(() => patchIntl(intl), [intl]);
    return patchedIntl;
};
