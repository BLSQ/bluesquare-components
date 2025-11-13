import { ReactElement, ChangeEvent, MouseEvent, KeyboardEvent, CSSProperties } from 'react';
import { PartialBy } from '../../../types/types';
export type ColumnWithAccessor = {
    Header: string | ReactElement;
    accessor: string | ((row: Record<string, any>) => unknown);
    Cell?: (s: any) => ReactElement | string;
};
export type ColumnSelectorHiddenProps = {
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
    onKeyUp?: (event: KeyboardEvent<HTMLButtonElement>) => void;
    onKeyPress?: (event: KeyboardEvent<HTMLButtonElement>) => void;
    style?: CSSProperties;
    title?: string;
};
export type Column = PartialBy<ColumnWithAccessor, 'accessor' | 'Header'> & {
    columns?: Column[];
    id?: string;
    width?: number;
    minWidth?: number;
    maxWidth?: number;
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
    resizable?: boolean;
    headerInfo?: string;
    label?: string;
    getToggleHiddenProps?: () => ColumnSelectorHiddenProps;
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
export type RenderCell = (settings: Record<string, any>) => ReactElement;
export {};
