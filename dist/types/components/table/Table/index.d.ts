import React, { MouseEvent } from 'react';
import { Column } from './types';
export interface ColumnFromReactTable {
    columns?: ColumnFromReactTable[];
    id: string;
    Header?: React.FC<any> | string;
    accessor: string;
    Cell?: React.FC<any>;
    width?: number;
    minWidth?: number;
    maxWidth?: number;
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
    label?: string;
    getToggleHiddenProps: () => any;
}
export interface TableComponentProps {
    params?: Record<string, any>;
    count?: number;
    data: Record<string, any>[];
    columns: Column[];
    baseUrl?: string;
    pages?: number;
    countOnTop?: boolean;
    marginTop?: boolean;
    marginBottom?: boolean;
    multiSelect?: boolean;
    selectionActions?: any[];
    setTableSelection?: (selectionType: string, items: any[], totalCount?: number) => any;
    selection?: Record<string, any>;
    selectionActionMessage?: string;
    showPagination?: boolean;
    showFooter?: boolean;
    onTableParamsChange?: (newParams: Record<string, string>) => void;
    defaultSorted?: any[];
    resetPageToOne?: string;
    elevation?: number;
    onRowClick?: (row?: any, event?: MouseEvent<HTMLElement>) => void;
    rowProps?: (row?: any) => void;
    cellProps?: (row?: any) => void;
    extraProps?: {
        loading?: boolean;
        SubComponent?: React.FC<any>;
        defaultPageSize?: number;
    } & Record<Exclude<string, 'loading' | 'SubComponent' | 'defaultPageSize'>, any>;
    paramsPrefix?: string;
    redirectTo?: (url: string, newParams: Record<string, string>) => void;
    columnSelectorEnabled?: boolean;
    columnSelectorButtonDisabled?: boolean;
    columnSelectorButtonType?: 'button' | 'icon';
    getIsSelectionDisabled?: (row: any) => boolean;
}
declare const Table: React.NamedExoticComponent<TableComponentProps>;
export { Table };
