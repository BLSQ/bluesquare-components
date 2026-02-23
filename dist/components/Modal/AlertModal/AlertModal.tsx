import React, { FunctionComponent, ReactNode } from 'react';
import { CloseButton } from './CloseButton';
import { IntlMessage } from '../../../types/types';
import { SimpleModal } from '../SimpleModal';

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
export const AlertModal: FunctionComponent<Props> = ({
    children,
    isOpen,
    closeDialog: closeDialogProp,
    titleMessage,
    id = 'alertModal',
    maxWidth = 'sm',
    dataTestId = 'alertModal',
    backdropClick = true,
}) => (
    <SimpleModal
        open={isOpen}
        onClose={() => null}
        id={id}
        dataTestId={dataTestId}
        titleMessage={titleMessage}
        closeDialog={closeDialogProp}
        buttons={CloseButton}
        maxWidth={maxWidth}
        backdropClick={backdropClick}
    >
        {children}
    </SimpleModal>
);
