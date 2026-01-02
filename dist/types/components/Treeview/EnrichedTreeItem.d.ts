import { FunctionComponent, ReactNode } from 'react';
type Props = {
    label: (value: any) => ReactNode;
    id: string;
    data: Record<string, any>;
    fetchChildrenData?: (id: string) => any;
    expanded?: string[];
    toggleOnLabelClick?: boolean;
    onLabelClick?: (item: any, data: any, isSelectable: boolean) => void;
    withCheckbox?: boolean;
    ticked?: string | any[];
    parentsTicked?: string[];
    scrollIntoView?: string;
    allowSelection?: (data: any) => boolean;
    queryOptions?: object;
    dependency?: any;
};
export declare const EnrichedTreeItem: FunctionComponent<Props>;
export {};
