import { FunctionComponent, ReactNode } from 'react';
export declare const useCustomInputTextStyle: (props?: any) => import("@mui/styles").ClassNameMap<"textStyle">;
type Props = {
    placeholder: string;
    disabled?: boolean;
    required?: boolean;
    errors?: string[];
    children?: ReactNode;
    onClick?: () => void;
    icon?: ReactNode;
};
export declare const CustomInput: FunctionComponent<Props>;
export {};
