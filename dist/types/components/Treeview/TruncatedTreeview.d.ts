import { FunctionComponent, ReactNode } from 'react';
type Props = {
    selectedItems: Map<string, Map<string, string>>;
    label: (value: any) => ReactNode;
    redirect?: (id: any) => void;
    disabled?: boolean;
};
export declare const TruncatedTreeview: FunctionComponent<Props>;
export {};
