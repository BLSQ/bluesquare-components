import { FunctionComponent, ReactNode } from 'react';
export declare const useCustomInputTextStyle: (props?: any) => import("@material-ui/styles").ClassNameMap<"textStyle">;
declare type Props = {
    placeholder: string;
    disabled?: boolean;
    required?: boolean;
    errors?: string[];
    children?: ReactNode;
    onClick?: () => void;
    icons?: ReactNode | ReactNode[];
};
export declare const CustomInput: FunctionComponent<Props>;
export {};
