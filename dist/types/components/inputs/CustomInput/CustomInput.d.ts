import { FunctionComponent, ReactNode } from 'react';
import { SxProps } from '@mui/material';
export declare const useCustomInputTextStyle: (props?: any) => import("@mui/styles").ClassNameMap<"textStyle">;
type Props = {
    placeholder: string;
    disabled?: boolean;
    required?: boolean;
    errors?: string[];
    children?: ReactNode;
    onClick?: () => void;
    icon?: ReactNode;
    sx?: SxProps;
};
export declare const CustomInput: FunctionComponent<Props>;
export {};
