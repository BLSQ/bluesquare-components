import React, { isValidElement } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import isEqualWith from 'lodash/isEqualWith';
import { InfoHeader } from '../components/table/InfoHeader';
import { Column } from '../components/table/Table/types';
import { IntlFormatMessage } from '../types/types';
import { capitalize } from './index';

export const getTableUrl = (
    urlKey: string,
    params: Record<string, any>,
    toExport = false,
    exportType = 'csv',
    asLocation = false,
    asSmallDict = false,
): string => {
    let url = `/api/${urlKey}/?`;
    const clonedParams = { ...params };

    if (toExport) {
        clonedParams[exportType] = true;
    }

    if (asLocation) {
        clonedParams.asLocation = true;
        clonedParams.limit = clonedParams.locationLimit;
        delete clonedParams.page;
    }

    if (asSmallDict) {
        clonedParams.limit = clonedParams.locationLimit;
        delete clonedParams.page;
    }

    delete clonedParams.locationLimit;

    const usedParams: string[] = [];
    Object.keys(clonedParams).forEach(key => {
        const value = clonedParams[key];
        if (value && !usedParams.includes(key)) {
            usedParams.push(key);
            url += `&${key}=${value}`;
        }
    });

    return url;
};

const getOrderValue = (obj: { id: string; desc: boolean }): string =>
    !obj.desc ? obj.id : `-${obj.id}`;

type SortList = { id: string; desc: boolean }[];
export const getSort = (sortList: SortList): string => {
    let orderTemp: string = '';
    sortList.forEach((sort, index) => {
        orderTemp = `${orderTemp}${index > 0 ? ',' : ''}${getOrderValue(sort)}`;
    });
    return orderTemp;
};

export const getOrderArray = (orders: string): SortList =>
    orders.split(',').map(stringValue => ({
        id: stringValue.replace('-', ''),
        desc: stringValue.indexOf('-') !== -1,
    }));

export const defaultSelectionActions = (
    selectAll: () => void,
    unSelectAll: () => void,
    formatMessage: IntlFormatMessage,
): { icon: React.ReactNode; label: string; onClick: () => void }[] => [
    {
        icon: <AddIcon />,
        label: formatMessage({
            id: 'iaso.label.selectAll',
            defaultMessage: 'Select all',
        }),
        onClick: () => selectAll(),
    },
    {
        icon: <RemoveIcon />,
        label: formatMessage({
            id: 'iaso.label.unSelectAll',
            defaultMessage: 'Unselect all',
        }),
        onClick: () => unSelectAll(),
    },
];

export const selectionInitialState = {
    selectedItems: [],
    unSelectedItems: [],
    selectAll: false,
    selectCount: 0,
};
export type Selection<T> = {
    selectedItems: Array<T>;
    unSelectedItems: Array<T>;
    selectAll: boolean;
    selectCount: number;
};

export const setTableSelection = (
    selection: Selection<any>,
    selectionType: string,
    items = [],
    totalCount = 0,
): Selection<any> => {
    switch (selectionType) {
        case 'select':
            return {
                ...selection,
                selectedItems: items,
                selectCount: items.length,
            };
        case 'unselect':
            return {
                ...selection,
                unSelectedItems: items,
                selectCount: totalCount - items.length,
            };
        case 'selectAll':
            return {
                ...selection,
                selectAll: true,
                selectedItems: [],
                unSelectedItems: [],
                selectCount: totalCount,
            };
        case 'reset':
            return selectionInitialState;
        default:
            return { ...selection };
    }
};

export const getParamsKey = (paramsPrefix: string, key: string): string => {
    if (paramsPrefix === '') {
        return key;
    }
    return `${paramsPrefix}${capitalize(key, true)}`;
};
type Filter = {
    apiUrlKey: string;
    urlKey: string;
    defaultValue: string;
};
export const getTableParams = (
    params: Record<string, any>,
    paramsPrefix: string,
    filters: Filter[],
    apiParams: Record<string, any>,
    defaultSorted = [{ id: 'name', desc: false }],
    defaultPageSize = 10,
): Record<string, any> => {
    const newParams: Record<string, any> = {
        ...apiParams,
        limit:
            parseInt(params[getParamsKey(paramsPrefix, 'pageSize')], 10) ||
            defaultPageSize,
        page: parseInt(params[getParamsKey(paramsPrefix, 'page')], 10) || 0,
        order: getSort(
            params[getParamsKey(paramsPrefix, 'order')]
                ? getOrderArray(params[getParamsKey(paramsPrefix, 'order')])
                : defaultSorted,
        ),
    };
    filters.forEach((f: Filter) => {
        newParams[f.apiUrlKey] = params[f.urlKey] ?? f.defaultValue;
    });
    return newParams;
};

export const tableInitialResult = {
    data: [],
    pages: 0,
    count: 0,
};

export const getColumnsHeadersInfos = (columns: Column[]): Column[] => {
    const newColumns = [...columns];
    columns.forEach((c, i) => {
        if (c.headerInfo) {
            newColumns[i] = {
                ...newColumns[i],
                Header: (
                    <InfoHeader message={c.headerInfo}>
                        {newColumns[i].Header}
                    </InfoHeader>
                ),
            };
        }
    });
    return newColumns;
};
export const columnSnapshot = (columns: Column[]): unknown[] =>
    columns.map(column => ({
        id: column.id,
        accessor:
            typeof column.accessor === 'function'
                ? column.accessor
                : column.accessor,
        Cell: column.Cell,
        sortable: column.sortable,
        width: column.width,
        minWidth: column.minWidth,
        maxWidth: column.maxWidth,
        align: column.align,
        headerInfo: column.headerInfo,
        header: isValidElement(column.Header)
            ? column.Header.type
            : column.Header,
        columns: column.columns ? columnSnapshot(column.columns) : undefined,
    }));

export const sameColumns = (next: Column[], prev: Column[]) =>
    isEqualWith(
        columnSnapshot(next),
        columnSnapshot(prev),
        (a: unknown, b: unknown) =>
            typeof a === 'function' && typeof b === 'function'
                ? a === b
                : undefined,
    );
