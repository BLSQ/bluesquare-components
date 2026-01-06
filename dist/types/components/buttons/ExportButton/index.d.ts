import { FunctionComponent } from 'react';
import { IntlMessage } from '../../../types/types';
type Props = {
    onClick: () => void;
    message?: IntlMessage;
    isDisabled?: boolean;
    batchExport: boolean;
    id?: string;
};
export declare const ExportButton: FunctionComponent<Props>;
export {};
