import { ComponentType, FunctionComponent } from 'react';
type ModalComponentProps = {
    closeDialog: () => void;
    isOpen: boolean;
};
type ButtonComponentProps = {
    onClick: () => void;
};
type ModalProps<T extends ModalComponentProps> = Omit<T, 'closeDialog' | 'isOpen'>;
type ButtonProps<T extends ButtonComponentProps> = Omit<T, 'onClick'>;
type FullModalProps<T extends ModalComponentProps, U extends ButtonComponentProps> = ModalProps<T> & {
    defaultOpen?: boolean;
    iconProps: ButtonProps<U>;
};
export declare const makeFullModal: <T extends ModalComponentProps, U extends ButtonComponentProps>(ModalComponent: ComponentType<T>, ButtonComponent: ComponentType<U>) => FunctionComponent<FullModalProps<T, U>>;
export {};
