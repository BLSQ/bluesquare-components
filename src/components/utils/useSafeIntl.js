import { useIntl } from 'react-intl';
import { patchIntl } from './patchIntl';

export const useSafeIntl = () => patchIntl(useIntl());
