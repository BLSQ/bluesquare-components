import { ButtonProps } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';
type Props = LinkProps & ButtonProps & {
    children: ReactNode;
    className?: string;
    buttonClassName?: string;
    unstable_viewTransition?: any;
};
export declare const LinkButton: FunctionComponent<Props>;
export {};
