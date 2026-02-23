import { FunctionComponent, ReactNode } from 'react';
import { IntlMessage } from '../../../types/types';
type Props = {
    children: ReactNode;
    isOpen: boolean;
    closeDialog: () => void;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    id?: string;
    dataTestId?: string;
    titleMessage: string | IntlMessage | ReactNode;
    backdropClick?: boolean;
};
export declare const AlertModal: FunctionComponent<Props>;
export {};
