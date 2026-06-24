import { FunctionComponent } from 'react';
type Props = {
    pages: number;
    count: number;
    onPageChange: (page: number) => void;
    pageIndex: number;
    rowsPerPage: number;
    rowsPerPageOptions: any[];
    selectRowsPerPage: (rowsPerPage: number) => void;
    countOnTop: boolean;
    selectCount: number;
};
export declare const TablePaginationActions: FunctionComponent<Props>;
export {};
