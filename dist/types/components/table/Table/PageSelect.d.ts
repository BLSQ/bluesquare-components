import { FunctionComponent } from 'react';
type Props = {
    pages?: number;
    pageIndex?: number;
    onPageChange: (page: number) => void;
};
export declare const PageSelect: FunctionComponent<Props>;
export {};
