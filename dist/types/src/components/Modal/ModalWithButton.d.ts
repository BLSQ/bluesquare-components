import React, { ComponentType, FunctionComponent } from 'react';
declare type ModalComponentProps = {
    closeDialog: () => void;
    isOpen: boolean;
};
declare type ButtonComponentProps = {
    onClick: () => void;
};
declare type ModalProps<T extends ModalComponentProps> = Omit<T, 'closeDialog' | 'isOpen'>;
declare type ButtonProps<T extends ButtonComponentProps> = Omit<T, 'onClick'>;
declare type FullModalProps<T extends ModalComponentProps, U extends ButtonComponentProps> = ModalProps<T> & {
    defaultOpen?: boolean;
    iconProps: ButtonProps<U>;
};
export declare const makeFullModal: <T extends ModalComponentProps, U extends ButtonComponentProps>(ModalComponent: React.ComponentType<T>, ButtonComponent: React.ComponentType<U>) => React.FunctionComponent<FullModalProps<T, U>>;
export {};
