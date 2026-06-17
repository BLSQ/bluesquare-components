import { FunctionComponent } from 'react';
type Props = {
    sortBy?: any[];
    row: Record<string, any>;
    rowProps: Record<string, any>;
    subComponent?: any;
    onRowClick?: any;
    expanded?: boolean;
    cellProps?: (cell: any) => Record<string, any>;
};
export declare const Row: FunctionComponent<Props>;
export {};
