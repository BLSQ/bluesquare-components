import { FunctionComponent } from 'react';
type Props = {
    column: Record<string, any>;
    columnsProps: Record<string, any>;
    setSortBy: Function;
    multiSortEnabled: boolean;
    sortBy: any[];
    isLastCell: boolean;
};
export declare const HeadCell: FunctionComponent<Props>;
export {};
