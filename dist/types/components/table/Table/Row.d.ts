import { FunctionComponent } from 'react';
type Props = {
    sortBy?: any[];
    row: Record<string, any>;
    rowProps: Record<string, any>;
    subComponent?: any;
    onRowClick?: any;
    expanded?: boolean;
    cellProps?: Function;
};
export declare const Row: FunctionComponent<Props>;
export {};
