import { FunctionComponent, ReactNode } from 'react';
import { IntlMessage } from '../../types/types';
export declare type MuiWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare type SimpleDialogProps = {
    open: boolean;
    maxWidth?: MuiWidth;
    onClose: () => void;
    id: string;
    dataTestId: string;
    titleMessage: string | IntlMessage | ReactNode;
    children: ReactNode;
    closeDialog: () => void;
    buttons: FunctionComponent<unknown & {
        closeDialog: () => void;
    }>;
};
export declare const SimpleModal: FunctionComponent<SimpleDialogProps>;
