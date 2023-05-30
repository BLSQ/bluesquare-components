import { ReactElement } from 'react';
import { PartialBy } from '../../../types/types';

export type ColumnWithAccessor = {
    Header: string | ReactElement;
    accessor: string;
    // eslint-disable-next-line no-unused-vars
    Cell?: (s: any) => ReactElement | string;
};

export type Column = PartialBy<ColumnWithAccessor, 'accessor'> & {
    id?: string;
    sortable?: boolean;
    resizable?: boolean;
    headerInfo?: string;
    width?: number;
    class?: string;
    // columns?: Column[];
    minWidth?: number;
    maxWidth?: number;
    align?: 'left' | 'center' | 'right';
};
export type Pagination = {
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

export type UrlParams = {
    pageSize: string;
    order: string;
    page: string;
    search?: string;
};

export type ApiParams = {
    limit: string;
    order: string;
    page: string;
    search?: string;
};

type Row<T> = {
    original: T;
};

export type Setting<T> = {
    row: Row<T>;
};

// eslint-disable-next-line no-unused-vars
export type RenderCell = (settings: Record<string, any>) => ReactElement;
