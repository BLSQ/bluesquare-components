import { FunctionComponent } from 'react';
type Props = {
    pages: number;
    count: number;
    onPageChange: Function;
    pageIndex: number;
    rowsPerPage: number;
    rowsPerPageOptions: any[];
    selectRowsPerPage: Function;
    countOnTop: boolean;
    selectCount: number;
};
export declare const TablePaginationActions: FunctionComponent<Props>;
export {};
