import { FunctionComponent } from 'react';
import { ConfirmCancelButtonsProps } from './ConfirmCancelButtons';
import { SimpleDialogProps } from './SimpleModal';
export type ConfirmCancelModalProps = Omit<SimpleDialogProps, 'buttons'> & ConfirmCancelButtonsProps;
export declare const ConfirmCancelModal: FunctionComponent<ConfirmCancelModalProps>;
