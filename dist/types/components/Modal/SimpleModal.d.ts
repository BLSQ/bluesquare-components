import { FunctionComponent, ReactNode } from 'react';
import { SxProps } from '@mui/material';
import { IntlMessage } from '../../types/types';
export type MuiWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SimpleDialogProps = {
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
    backdropClick?: boolean;
    sx?: SxProps;
    slotProps?: {
        backdrop?: Function | Record<string, any>;
        container?: Function | Record<string, any>;
        paper?: Function | Record<string, any>;
        root?: Function | Record<string, any>;
        transition?: Function | Record<string, any>;
    };
};
export declare const SimpleModal: FunctionComponent<SimpleDialogProps>;
