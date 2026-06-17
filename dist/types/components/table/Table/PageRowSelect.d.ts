import { FunctionComponent } from 'react';
type Props = {
    rowsPerPage: number;
    rowsPerPageOptions: any[];
    selectRowsPerPage: (rowsPerPage: number) => void;
};
export declare const PageRowSelect: FunctionComponent<Props>;
export {};
