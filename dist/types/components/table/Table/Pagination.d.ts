import { FunctionComponent } from 'react';
type Props = {
    onTableParamsChange: (keyValue: string, page: number | string) => void;
    countOnTop: boolean;
    count: number;
    rowsPerPage: number;
    pageIndex: number;
    pages: number;
    selectCount: number;
};
export declare const Pagination: FunctionComponent<Props>;
export {};
