import React, { FunctionComponent } from 'react';
import TablePagination from '@mui/material/TablePagination';
import { makeStyles } from '@mui/styles';
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

type Props = {
    onTableParamsChange: (keyValue: string, page: number | string) => void;
    countOnTop: boolean;
    count: number;
    rowsPerPage: number;
    pageIndex: number;
    pages: number;
    selectCount: number;
};

export const Pagination: FunctionComponent<Props> = ({
    count = 0,
    rowsPerPage = 0,
    pageIndex = 0,
    onTableParamsChange,
    pages = 0,
    countOnTop,
    selectCount = 0,
}) => {
    const classes: Record<string, string> = useStyles();
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
