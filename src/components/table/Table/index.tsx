import React, { useMemo } from 'react';
import Box from '@material-ui/core/Box';
import MuiTable from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import isEqual from 'lodash/isEqual';

import {
    useTable,
    usePagination,
    useSortBy,
    useResizeColumns,
} from 'react-table';

import { useSafeIntl } from '../../../utils/useSafeIntl';

import { DEFAULT_PAGE_SIZE, DEFAULT_PAGE, DEFAULT_ORDER } from './constants';

import {
    selectionInitialState,
    getParamsKey,
    getSort,
    getOrderArray,
    getColumnsHeadersInfos,
    getSimplifiedColumns,
} from '../../../utils/tableUtils';

import { Head } from './Head';
import { Body } from './Body';
import { Footer } from './Footer';
import { Select, getSelectionCol } from './Select';
import { NoResult } from './NoResult';
import { Count } from './Count';
import { Pagination } from './Pagination';
import { LoadingSpinner } from '../../LoadingSpinner/index';
import { useKeyPressListener } from '../../../utils/useKeyPressListener';
import { useSkipEffectOnMount } from '../../../utils/useSkipEffectOnMount';
import { Grid } from '@material-ui/core';
import { ColumnsSelectGeneric } from '../ColumnsSelectDrawer/ColumnSelectGeneric';
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

export interface Column {
    columns?: Column[];
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
    // eslint-disable-next-line no-unused-vars
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
    // eslint-disable-next-line no-unused-vars
    redirectTo?: (url: string, newParams: Record<string, string>) => void;
    columnSelectorEnabled: boolean;
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
        columnSelectorEnabled = true,
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
                ),
            );
        }
        return getColumnsHeadersInfos(temp);
    }, [props.columns, multiSelect, selection]);

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
        toggleHideColumn,
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
            <Grid container justifyContent="flex-end">
                {countOnTop && (
                    <Count count={count} selectCount={selection.selectCount} />
                )}
                {columnSelectorEnabled && (
                    <ColumnsSelectGeneric
                        columns={columnsFromUse}
                        hiddenColumns={hiddenColumns}
                        toggleHideColumn={toggleHideColumn}
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
