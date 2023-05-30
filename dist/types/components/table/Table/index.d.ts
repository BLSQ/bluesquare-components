import React from 'react';
import { Column } from './types';
export interface TableComponentProps {
    params: Record<string, any>;
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
    setTableSelection?: () => any;
    selection?: Record<string, any>;
    selectionActionMessage?: string;
    showPagination?: boolean;
    showFooter?: boolean;
    onTableParamsChange?: (newParams: Record<string, string>) => void;
    defaultSorted?: any[];
    resetPageToOne?: string;
    elevation?: number;
    onRowClick?: () => void;
    rowProps?: () => void;
    cellProps?: () => void;
    extraProps?: {
        loading?: boolean;
        SubComponent?: React.FC<any>;
        defaultPageSize?: number;
    };
    paramsPrefix?: string;
    redirectTo?: (url: string, newParams: Record<string, string>) => void;
}
declare const Table: React.NamedExoticComponent<TableComponentProps>;
export { Table };
