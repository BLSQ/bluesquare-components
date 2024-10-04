import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MuiTable from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { makeStyles } from '@mui/styles';
import isEqual from 'lodash/isEqual';
import React, { MouseEvent, useMemo } from 'react';

import {
    usePagination,
    useResizeColumns,
    useSortBy,
    useTable,
} from 'react-table';

import { Grid } from '@mui/material';
import { useSafeIntl } from '../../../utils/useSafeIntl';

import { DEFAULT_ORDER, DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from './constants';

import {
    getColumnsHeadersInfos,
    getOrderArray,
    getParamsKey,
    getSimplifiedColumns,
    getSort,
    selectionInitialState,
} from '../../../utils/tableUtils';

import { useKeyPressListener } from '../../../utils/useKeyPressListener';
import { useSkipEffectOnMount } from '../../../utils/useSkipEffectOnMount';
import { LoadingSpinner } from '../../LoadingSpinner/index';
import { ColumnsSelectGeneric } from '../ColumnsSelectDrawer/ColumnSelectGeneric';
import { Body } from './Body';
import { Count } from './Count';
import { Footer } from './Footer';
import { Head } from './Head';
import { NoResult } from './NoResult';
import { Pagination } from './Pagination';
import { Select, getSelectionCol } from './Select';

import { Column } from './types';

/**
 * TableComponent component, no redux, no fetch, just displaying.
 * Multi selection is optional, if set to true you can add custom actions
 * Required props in order to work:
 * @param {Object} params
 * @param {Array} data
 * @param {Array} columns
 * @param {Number} pages
 * @param {Function} redirectTo
 *
 * Optional props:
 * @param {Number} count
 * @param {String} baseUrl
 * @param {Array} marginTop
 * @param {Array} countOnTop
 * @param {Array} showPagination
 * @param {Array} showFooter
 * @param {Object} extraProps
 * @param {String} paramPrefix
 * @param {Function} onRowClick  Pass this function to the table and each row of the table will be clickable.
 *                               It will return the value of the row and the event as second argument.
 *                               Please do not use an action column and a clickable row, it can be a bit confusing.
 *                               For complex cases you can always check the origin of the click with `event.target`
 *                               and decide or not propagate the click.
 *
 * Multi selection is optional
 * Selection props:
 * @param {Boolean} multiSelect
 * if set to true you can add custom actions, an array of object(s):
 *   @param {Array} selectionActions
 *       @param {Array} icon
 *       @param {String} label
 *       @param {Function} onClick
 *       @param {Boolean} disabled
 * You need also to maintain selection state in parent component
 * You can use selectionInitialState and setTableSelection from Iaso/utils/tableUtils.js
 *   @param {Object} selection
 *   @param {Function} setTableSelection
 */

const useStyles = makeStyles(() => ({
    tableContainer: {
        overflowY: 'hidden',
    },
    paper: {
        position: 'relative',
    },
}));

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
    label?: string; // for search
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
    setTableSelection?: () => any;
    selection?: Record<string, any>;
    selectionActionMessage?: string;
    showPagination?: boolean;
    showFooter?: boolean;
    // eslint-disable-next-line no-unused-vars
    onTableParamsChange?: (newParams: Record<string, string>) => void;
    defaultSorted?: any[];
    resetPageToOne?: string;
    elevation?: number;
    onRowClick?: (
        // eslint-disable-next-line no-unused-vars
        row?: any,
        // eslint-disable-next-line no-unused-vars
        event?: MouseEvent<HTMLElement>,
    ) => void;
    // eslint-disable-next-line no-unused-vars
    rowProps?: (row?: any) => void;
    // eslint-disable-next-line no-unused-vars
    cellProps?: (row?: any) => void;
    extraProps?: {
        loading?: boolean;
        SubComponent?: React.FC<any>;
        defaultPageSize?: number;
        // Allowing for other props in the extraProps object
    } & Record<
        Exclude<string, 'loading' | 'SubComponent' | 'defaultPageSize'>,
        any
    >;

    paramsPrefix?: string;
    // eslint-disable-next-line no-unused-vars
    redirectTo?: (url: string, newParams: Record<string, string>) => void;
    columnSelectorEnabled?: boolean;
    columnSelectorButtonDisabled?: boolean;
    columnSelectorButtonType?: 'button' | 'icon';
    getIsSelectionDisabled?: () => boolean;
}

const TableComponent: React.FC<TableComponentProps> = props => {
    const {
        params = {
            pageSize: 10,
            page: 1,
            order: '-created_at',
        },
        count = 0,
        extraProps = { loading: false },
        paramsPrefix = '',
        redirectTo,
        baseUrl = '',
        pages = 0,
        countOnTop = true,
        marginTop = true,
        marginBottom = true,
        multiSelect = false,
        selectionActions = [],
        setTableSelection = () => null,
        selection = selectionInitialState,
        selectionActionMessage = null,
        showPagination = true,
        showFooter = false,
        onTableParamsChange = () => null,
        defaultSorted = getOrderArray(DEFAULT_ORDER),
        resetPageToOne = '',
        elevation = 3,
        onRowClick,
        rowProps = () => ({}),
        cellProps = () => ({}),
        columnSelectorEnabled = false,
        columnSelectorButtonDisabled = false,
        columnSelectorButtonType = 'icon',
        getIsSelectionDisabled = () => false,
    } = props;
    const { formatMessage } = useSafeIntl();
    const classes = useStyles();

    const multiSortEnabled = useKeyPressListener('Shift');
    const columns = useMemo(() => {
        const temp = [...props.columns];
        if (
            multiSelect &&
            !props.columns.find(c => c.accessor === 'selected')
        ) {
            temp.push(
                getSelectionCol(
                    selection,
                    setTableSelection,
                    count,
                    formatMessage,
                    getIsSelectionDisabled,
                ),
            );
        }
        return getColumnsHeadersInfos(temp);
    }, [props.columns, multiSelect, selection, getIsSelectionDisabled]);

    const data = useMemo(() => props.data, [props.data]);

    const orderParam = params[getParamsKey(paramsPrefix, 'order')];
    const pageParam = params[getParamsKey(paramsPrefix, 'page')];
    const pageSizeParam = params[getParamsKey(paramsPrefix, 'pageSize')];

    const { loading } = extraProps;

    const initialState = useMemo(() => {
        const urlPageSize = parseInt(pageSizeParam, 10);
        const urlSort = orderParam && getOrderArray(orderParam);
        return {
            pageIndex: pageParam
                ? parseInt(pageParam, 10) - 1
                : DEFAULT_PAGE - 1,
            pageSize:
                urlPageSize || extraProps?.defaultPageSize || DEFAULT_PAGE_SIZE,
            sortBy: urlSort || defaultSorted,
        };
    }, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        prepareRow,
        gotoPage,
        setPageSize,
        setSortBy,
        page,
        columns: columnsFromUse,
        state: { pageSize, pageIndex, sortBy, hiddenColumns },
    } = useTable(
        {
            columns,
            data,
            initialState,
            disableMultiSort: true,
            manualPagination: true,
            manualSortBy: true,
            pageCount: pages,
            autoResetPage: false,
        },
        useSortBy,
        useResizeColumns,
        usePagination,
    );
    const handleTableParamsChange = (key, value) => {
        const newParams = {
            ...params,
        };
        if (key === 'order' && value.length > 0) {
            setSortBy(value);
            newParams[getParamsKey(paramsPrefix, 'order')] = getSort(value);
        } else if (key !== 'order') {
            newParams[getParamsKey(paramsPrefix, key)] = value;
        }

        if (key === 'pageSize') {
            newParams[getParamsKey(paramsPrefix, 'page')] = 1;
            setPageSize(value);
        }
        if (key === 'page') {
            gotoPage(value - 1);
        }
        // FIXME In time we should get rid of redirectTo
        if (redirectTo) {
            redirectTo(baseUrl, newParams);
        }
        onTableParamsChange(newParams);
    };

    const tableProps = {
        ...getTableProps(),
        size: 'small',
    };

    useSkipEffectOnMount(() => {
        gotoPage(0);
    }, [resetPageToOne]);

    useSkipEffectOnMount(() => {
        if (orderParam && getSort(sortBy) !== orderParam) {
            setSortBy(getOrderArray(orderParam));
        }
    }, [orderParam]);

    useSkipEffectOnMount(() => {
        if (pageSizeParam !== pageSize) {
            setPageSize(pageSizeParam);
        }
    }, [pageSizeParam]);

    useSkipEffectOnMount(() => {
        const newPage = parseInt(pageParam, 10) - 1;
        if (!Number.isNaN(newPage) && pageIndex !== newPage) {
            gotoPage(newPage);
        }
    }, [pageParam]);

    const rowsPerPage = parseInt(pageSize, 10);
    return (
        <Box mt={marginTop ? 4 : 0} mb={marginBottom ? 4 : 0}>
            <Select
                count={count}
                multiSelect={multiSelect}
                selectionActions={selectionActions}
                selection={selection}
                setTableSelection={setTableSelection}
                selectionActionMessage={selectionActionMessage}
            />
            {columnSelectorEnabled && columnSelectorButtonType === 'button' && (
                <Grid container justifyContent="flex-end">
                    <Box mb={2} mt={2}>
                        <ColumnsSelectGeneric
                            columns={columnsFromUse}
                            hiddenColumns={hiddenColumns}
                            disabled={columnSelectorButtonDisabled}
                            buttonType={columnSelectorButtonType}
                        />
                    </Box>
                </Grid>
            )}
            <Grid container justifyContent="flex-end">
                {countOnTop && (
                    <Count count={count} selectCount={selection.selectCount} />
                )}
                {columnSelectorEnabled &&
                    columnSelectorButtonType === 'icon' && (
                        <ColumnsSelectGeneric
                            columns={columnsFromUse}
                            hiddenColumns={hiddenColumns}
                            disabled={columnSelectorButtonDisabled}
                            buttonType={columnSelectorButtonType}
                        />
                    )}
            </Grid>
            <Paper elevation={elevation} className={classes.paper}>
                {loading && <LoadingSpinner absolute />}
                <TableContainer className={classes.tableContainer}>
                    <MuiTable {...tableProps} stickyHeader>
                        <Head
                            headerGroups={headerGroups}
                            setSortBy={newSort =>
                                handleTableParamsChange('order', newSort)
                            }
                            multiSortEnabled={multiSortEnabled}
                            sortBy={sortBy}
                        />
                        <Body
                            page={page}
                            getTableBodyProps={getTableBodyProps}
                            prepareRow={prepareRow}
                            subComponent={extraProps.SubComponent}
                            sortBy={sortBy}
                            onRowClick={onRowClick}
                            rowProps={rowProps}
                            cellProps={cellProps}
                        />
                        {showFooter && <Footer footerGroups={footerGroups} />}
                    </MuiTable>
                </TableContainer>
                {page?.length === 0 && <NoResult loading={loading} />}
                {page?.length > 0 && showPagination && (
                    <Pagination
                        count={count}
                        rowsPerPage={rowsPerPage}
                        pageIndex={pageIndex}
                        onTableParamsChange={handleTableParamsChange}
                        pages={pages}
                        countOnTop={countOnTop}
                        selectCount={selection.selectCount}
                    />
                )}
            </Paper>
        </Box>
    );
};

const Table = React.memo(TableComponent, (props, prevProps) => {
    const newColumns = getSimplifiedColumns(props.columns);
    const oldColumns = getSimplifiedColumns(prevProps.columns);
    const shouldRender = !(
        !isEqual(props.data, prevProps.data) ||
        !isEqual(newColumns, oldColumns) ||
        !isEqual(
            props.selection?.selectedItems,
            prevProps.selection?.selectedItems,
        ) ||
        !isEqual(props.selection?.selectAll, prevProps.selection?.selectAll) ||
        !isEqual(
            props.selection?.unSelectedItems,
            prevProps.selection?.unSelectedItems,
        ) ||
        !isEqual(props.extraProps, prevProps.extraProps)
    );
    return shouldRender;
});

export { Table };
