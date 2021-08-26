import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import MaUTable from '@material-ui/core/Table';
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
} from './tableUtils';

import { Head } from './Head';
import { Body } from './Body';
import { Footer } from './Footer';
import { Select, getSelectionCol } from './Select';
import { NoResult } from './NoResult';
import { Count } from './Count';
import { Pagination } from './Pagination';
/**
 * TableComponent component, no redux, no fetch, just displaying.
 * Multi selection is optionnal, if set to true you can add custom actions
 * Required props in order to work:
 * @param {Object} params
 * @param {Array} data
 * @param {Array} columns
 * @param {Number} pages
 * @param {Function} redirectTo
 *
 * Optionnal props:
 * @param {Number} count
 * @param {String} baseUrl
 * @param {Array} marginTop
 * @param {Array} countOnTop
 * @param {Array} showPagination
 * @param {Array} showFooter
 * @param {Object} extraProps
 * @param {String} paramPrefix
 *
 * Multi selection is optionnal
 * Selection props:
 * @param {Boolean} multiSelect
 * if set to true you can add custom actions, an array of object(s):
 *   @param {Array} selectionActions
 *       @param {Array} icon
 *       @param {String} label
 *       @param {Function} onClick
 *       @param {Boolean} disabled
 * You need aslo to maintain selection state in parent component
 * You can use selectionInitialState and setTableSelection from Iaso/utils/tableUtils.js
 *   @param {Object} selection
 *   @param {Function} setTableSelection
 */

const useStyles = makeStyles(() => ({
    tableContainer: {
        overflow: 'hidden',
    },
}));
const TableComponent = props => {
    const {
        params,
        count,
        extraProps,
        paramsPrefix,
        redirectTo,
        baseUrl,
        pages,
        countOnTop,
        marginTop,
        multiSelect,
        selectionActions,
        setTableSelection,
        selection,
        selectionActionMessage,
        showPagination,
        showFooter,
    } = props;
    const { formatMessage } = useSafeIntl();
    const classes = useStyles();

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

    const { loading } = extraProps;

    const initialState = useMemo(() => {
        const urlPageSize = parseInt(
            params[getParamsKey(paramsPrefix, 'pageSize')],
            10,
        );
        return {
            pageIndex: params[getParamsKey(paramsPrefix, 'page')]
                ? params[getParamsKey(paramsPrefix, 'page')] - 1
                : DEFAULT_PAGE - 1,
            pageSize:
                urlPageSize ||
                (extraProps && extraProps.defaultPageSize) ||
                DEFAULT_PAGE_SIZE,
            sortBy: params[getParamsKey(paramsPrefix, 'order')]
                ? getOrderArray(params[getParamsKey(paramsPrefix, 'order')])
                : getOrderArray(DEFAULT_ORDER),
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
        state: { pageSize, pageIndex, sortBy },
    } = useTable(
        {
            columns,
            data,
            initialState,
            disableMultiSort: true,
            manualPagination: true,
            manualSortBy: true,
            pageCount: pages,
        },
        useSortBy,
        useResizeColumns,
        usePagination,
    );
    const onTableParamsChange = (key, value) => {
        const newParams = {
            ...params,
        };
        if (key === 'order' && value.length > 0) {
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
        redirectTo(baseUrl, newParams);
    };

    useEffect(() => {
        onTableParamsChange('order', sortBy);
    }, [sortBy]);

    const tableProps = {
        ...getTableProps(),
        size: 'small',
    };
    const rowsPerPage = parseInt(pageSize, 10);
    return (
        <Box mt={marginTop ? 4 : 0} mb={4}>
            <Select
                count={count}
                multiSelect={multiSelect}
                selectionActions={selectionActions}
                selection={selection}
                setTableSelection={setTableSelection}
                selectionActionMessage={selectionActionMessage}
            />
            {countOnTop && (
                <Count count={count} selectCount={selection.selectCount} />
            )}

            <Paper elevation={3}>
                <TableContainer className={classes.tableContainer}>
                    <MaUTable {...tableProps} stickyHeader>
                        <Head
                            headerGroups={headerGroups}
                            setSortBy={setSortBy}
                        />
                        <Body
                            page={page}
                            getTableBodyProps={getTableBodyProps}
                            prepareRow={prepareRow}
                            subComponent={extraProps.SubComponent}
                            sortBy={sortBy}
                        />
                        {showFooter && <Footer footerGroups={footerGroups} />}
                    </MaUTable>
                </TableContainer>
                {page && page.length === 0 && <NoResult loading={loading} />}
                {page && page.length > 0 && showPagination && (
                    <Pagination
                        count={count}
                        rowsPerPage={rowsPerPage}
                        pageIndex={pageIndex}
                        onTableParamsChange={onTableParamsChange}
                        pages={pages}
                        countOnTop={countOnTop}
                        selectCount={selection.selectCount}
                    />
                )}
            </Paper>
        </Box>
    );
};
TableComponent.defaultProps = {
    count: 0,
    pages: 0,
    baseUrl: '',
    countOnTop: true,
    marginTop: true,
    multiSelect: false,
    selectionActions: [],
    selection: selectionInitialState,
    setTableSelection: () => null,
    redirectTo: () => null,
    extraProps: {
        loading: false,
    },
    paramsPrefix: '',
    params: {
        pageSize: 10,
        page: 1,
        order: '-created_at',
    },
    selectionActionMessage: null,
    showPagination: true,
    showFooter: false,
};

TableComponent.propTypes = {
    params: PropTypes.object,
    count: PropTypes.number,
    pages: PropTypes.number,
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    baseUrl: PropTypes.string,
    countOnTop: PropTypes.bool,
    marginTop: PropTypes.bool,
    multiSelect: PropTypes.bool,
    selectionActions: PropTypes.array,
    redirectTo: PropTypes.func,
    setTableSelection: PropTypes.func,
    selection: PropTypes.object,
    extraProps: PropTypes.object,
    paramsPrefix: PropTypes.string,
    selectionActionMessage: PropTypes.string,
    showPagination: PropTypes.bool,
    showFooter: PropTypes.bool,
};

const Table = React.memo(TableComponent, (props, prevProps) => {
    const newColumns = getSimplifiedColumns(props.columns);
    const oldColumns = getSimplifiedColumns(prevProps.columns);
    const shouldRender = !(
        !isEqual(props.data, prevProps.data) ||
        !isEqual(newColumns, oldColumns) ||
        !isEqual(
            props.selection.selectedItems,
            prevProps.selection.selectedItems,
        ) ||
        !isEqual(props.selection.selectAll, prevProps.selection.selectAll) ||
        !isEqual(
            props.selection.unSelectedItems,
            prevProps.selection.unSelectedItems,
        ) ||
        !isEqual(props.extraProps, prevProps.extraProps)
    );
    return shouldRender;
});

export { Table };
