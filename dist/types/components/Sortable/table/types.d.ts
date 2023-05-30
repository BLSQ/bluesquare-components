import { ReactElement } from 'react';
import { PartialBy } from '../../../types/types';
export declare type ColumnWithAccessor = {
    Header: string;
    accessor: string;
    Cell?: (s: any) => ReactElement | string;
};
export declare type Column = PartialBy<ColumnWithAccessor, 'accessor'> & {
    Header: string | ReactElement;
    id?: string;
    sortable?: boolean;
    resizable?: boolean;
    headerInfo?: string;
    width?: number;
    align?: string;
    class?: string;
    columns?: Column[];
};
export declare type Pagination = {
    pages: number;
    page: number;
    count: number;
    limit: number;
    has_next: boolean;
    has_previous: boolean;
};
export interface Paginated<T> extends Pagination {
    results: T[];
}
export declare type UrlParams = {
    pageSize: string;
    order: string;
    page: string;
    search?: string;
};
export declare type ApiParams = {
    limit: string;
    order: string;
    page: string;
    search?: string;
};
declare type Row<T> = {
    original: T;
};
export declare type Setting<T> = {
    row: Row<T>;
};
export declare type RenderCell = (settings: Record<string, any>) => ReactElement;
export {};
