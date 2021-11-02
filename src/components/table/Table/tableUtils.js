import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import { InfoHeader } from '../InfoHeader';
import { capitalize } from '../../../utils/index';

const getTableUrl = (
    urlKey,
    params,
    toExport = false,
    exportType = 'csv',
    asLocation = false,
    asSmallDict = false,
) => {
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

    const usedParams = [];
    Object.keys(clonedParams).forEach(key => {
        const value = clonedParams[key];
        if (value && !usedParams.includes(key)) {
            usedParams.push(key);
            url += `&${key}=${value}`;
        }
    });

    return url;
};

export { getTableUrl };

const getOrderValue = obj => (!obj.desc ? obj.id : `-${obj.id}`);

export const getSort = sortList => {
    let orderTemp;
    sortList.forEach((sort, index) => {
        orderTemp = `${orderTemp || ''}${index > 0 ? ',' : ''}${getOrderValue(
            sort,
        )}`;
    });
    return orderTemp;
};

export const getOrderArray = orders =>
    orders.split(',').map(stringValue => ({
        id: stringValue.replace('-', ''),
        desc: stringValue.indexOf('-') !== -1,
    }));

export const getSimplifiedColumns = columns =>
    columns.map(c => {
        if (c.columns) {
            return {
                id: c.accessor,
                columns: getSimplifiedColumns(c.columns),
            };
        }
        return { id: c.accessor };
    });

export const defaultSelectionActions = (
    selectAll,
    unSelectAll,
    formatMessage,
) => [
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

export const setTableSelection = (
    selection,
    selectionType,
    items = [],
    totalCount = 0,
) => {
    let newSelection;
    switch (selectionType) {
        case 'select':
            newSelection = {
                ...selection,
                selectedItems: items,
                selectCount: items.length,
            };
            break;
        case 'unselect':
            newSelection = {
                ...selection,
                unSelectedItems: items,
                selectCount: totalCount - items.length,
            };
            break;
        case 'selectAll':
            newSelection = {
                ...selection,
                selectAll: true,
                selectedItems: [],
                unSelectedItems: [],
                selectCount: totalCount,
            };
            break;
        case 'reset':
            newSelection = selectionInitialState;
            break;
        default:
            newSelection = { ...selection };
            break;
    }
    return newSelection;
};

export const getParamsKey = (paramsPrefix, key) => {
    if (paramsPrefix === '') {
        return key;
    }
    return `${paramsPrefix}${capitalize(key, true)}`;
};

export const getColumnsHeadersInfos = columns => {
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
