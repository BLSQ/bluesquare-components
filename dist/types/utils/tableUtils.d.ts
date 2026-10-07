import React from 'react';
import { Column } from '../components/table/Table/types';
import { IntlFormatMessage } from '../types/types';
export declare const getTableUrl: (urlKey: string, params: Record<string, any>, toExport?: boolean, exportType?: string, asLocation?: boolean, asSmallDict?: boolean) => string;
type SortList = {
    id: string;
    desc: boolean;
}[];
export declare const getSort: (sortList: SortList) => string;
export declare const getOrderArray: (orders: string) => SortList;
export declare const defaultSelectionActions: (selectAll: () => void, unSelectAll: () => void, formatMessage: IntlFormatMessage) => {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
}[];
export declare const selectionInitialState: {
    selectedItems: never[];
    unSelectedItems: never[];
    selectAll: boolean;
    selectCount: number;
};
export type Selection<T> = {
    selectedItems: Array<T>;
    unSelectedItems: Array<T>;
    selectAll: boolean;
    selectCount: number;
};
export declare const setTableSelection: (selection: Selection<any>, selectionType: string, items?: never[], totalCount?: number) => Selection<any>;
export declare const getParamsKey: (paramsPrefix: string, key: string) => string;
type Filter = {
    apiUrlKey: string;
    urlKey: string;
    defaultValue: string;
};
export declare const getTableParams: (params: Record<string, any>, paramsPrefix: string, filters: Filter[], apiParams: Record<string, any>, defaultSorted?: {
    id: string;
    desc: boolean;
}[], defaultPageSize?: number) => Record<string, any>;
export declare const tableInitialResult: {
    data: never[];
    pages: number;
    count: number;
};
export declare const getColumnsHeadersInfos: (columns: Column[]) => Column[];
export declare const columnSnapshot: (columns: Column[]) => unknown[];
export declare const sameColumns: (next: Column[], prev: Column[]) => any;
export {};
