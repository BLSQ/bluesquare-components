import { FunctionComponent } from 'react';
type Props = {
    placeholder?: string;
    minRows?: number;
    maxRows?: number;
    onChange?: (comment: string) => void;
    className?: string;
    buttonText?: string;
    onConfirm?: (comment: string) => void;
    position?: string;
    inline?: boolean;
};
export declare const AddComment: FunctionComponent<Props>;
export {};
