export function getTableUrl(urlKey: any, params: any, toExport?: boolean, exportType?: string, asLocation?: boolean, asSmallDict?: boolean): string;
export function getSort(sortList: any): undefined;
export function getOrderArray(orders: any): any;
export function getSimplifiedColumns(columns: any): any;
export function defaultSelectionActions(selectAll: any, unSelectAll: any, formatMessage: any): {
    icon: React.JSX.Element;
    label: any;
    onClick: () => any;
}[];
export namespace selectionInitialState {
    let selectedItems: never[];
    let unSelectedItems: never[];
    let selectAll: boolean;
    let selectCount: number;
}
export function setTableSelection(selection: any, selectionType: any, items?: any[], totalCount?: number): any;
export function getParamsKey(paramsPrefix: any, key: any): any;
export function getTableParams(params: any, paramsPrefix: any, filters: any, apiParams: any, defaultSorted?: {
    id: string;
    desc: boolean;
}[], defaultPageSize?: number): any;
export namespace tableInitialResult {
    let data: never[];
    let pages: number;
    let count: number;
}
export function getColumnsHeadersInfos(columns: any): any[];
import React from 'react';
