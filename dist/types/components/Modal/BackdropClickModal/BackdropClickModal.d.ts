import { FunctionComponent } from 'react';
import { IntlMessage } from '../../../types/types';
declare type Props = {
    onConfirm: () => void;
    open: boolean;
    closeDialog: () => void;
    dataTestId?: string;
    id?: string;
    title?: string;
    confirmMessage?: IntlMessage;
    cancelMessage?: IntlMessage;
};
export declare const BackdropClickModal: FunctionComponent<Props>;
export {};
