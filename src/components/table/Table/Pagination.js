import React from 'react';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles } from '@material-ui/core/styles';

import { ROWS_PER_PAGE_OPTIONS } from './constants';
import { TablePaginationActions } from './TablePaginationActions';

const useStyles = makeStyles(() => ({
    spacer: {
        display: 'none',
    },
    caption: {
        display: 'none',
    },
    input: {
        display: 'none',
    },
}));
const Pagination = ({
    count,
    rowsPerPage,
    pageIndex,
    onTableParamsChange,
    pages,
    countOnTop,
    selectCount,
}) => {
    const classes = useStyles();
    const displayedPageIndex = pageIndex + 1 > pages ? pages - 1 : pageIndex;
    return (
        <TablePagination
            classes={{
                spacer: classes.spacer,
                caption: classes.caption,
                input: classes.input,
            }}
            rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
            component="div"
            count={count}
            rowsPerPage={rowsPerPage}
            page={displayedPageIndex}
            onPageChange={(event, newPage) => {
                onTableParamsChange('page', newPage + 1);
            }}
            onRowsPerPageChange={event => {
                onTableParamsChange('pageSize', event.target.value);
            }}
            ActionsComponent={() => (
                <TablePaginationActions
                    rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
                    count={count}
                    rowsPerPage={rowsPerPage}
                    onPageChange={value => {
                        onTableParamsChange('page', value);
                    }}
                    selectRowsPerPage={value =>
                        onTableParamsChange('pageSize', value)
                    }
                    pageIndex={displayedPageIndex}
                    pages={pages}
                    countOnTop={countOnTop}
                    selectCount={selectCount}
                />
            )}
            labelDisplayedRows={() => null}
        />
    );
};
Pagination.defaultProps = {
    count: 0,
    rowsPerPage: 0,
    pageIndex: 0,
    pages: 0,
    selectCount: 0,
};

Pagination.propTypes = {
    count: PropTypes.number,
    rowsPerPage: PropTypes.number,
    pageIndex: PropTypes.number,
    pages: PropTypes.number,
    onTableParamsChange: PropTypes.func.isRequired,
    countOnTop: PropTypes.bool.isRequired,
    selectCount: PropTypes.number,
};

export { Pagination };
