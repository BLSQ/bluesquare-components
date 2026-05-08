import { ButtonProps } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';
type Props = LinkProps & {
    disabled?: boolean;
} & ButtonProps & {
    children: ReactNode;
    className?: string;
    buttonClassName?: string;
};
export declare const LinkButton: FunctionComponent<Props>;
export {};
