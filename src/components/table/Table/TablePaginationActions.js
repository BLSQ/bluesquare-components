import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import classNames from 'classnames';

import { useSafeIntl } from '../../../utils/useSafeIntl';

import { PageSelect } from './PageSelect';
import { PageRowSelect } from './PageRowSelect';
import { Count } from './Count';

import { MESSAGES } from './messages';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        position: 'relative',
    },
    withCount: {
        marginRight: '130px',
    },
    count: {
        position: 'absolute',
        right: theme.spacing(2),
    },
}));

const TablePaginationActions = ({
    count,
    pageIndex,
    rowsPerPage,
    onPageChange,
    pages,
    rowsPerPageOptions,
    selectRowsPerPage,
    countOnTop,
    selectCount,
}) => {
    const classes = useStyles();

    const { formatMessage } = useSafeIntl();
    const handleFirstPageButtonClick = () => {
        onPageChange(1);
    };

    const handleBackButtonClick = () => {
        onPageChange(pageIndex);
    };

    const handleNextButtonClick = () => {
        onPageChange(pageIndex + 2);
    };

    const handleLastPageButtonClick = () => {
        onPageChange(Math.max(0, Math.ceil(count / rowsPerPage)));
    };

    const firstDisabled = pageIndex === 0;
    const lastDisabled = pageIndex >= Math.ceil(count / rowsPerPage) - 1;

    return (
        <Box
            py={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            className={classes.root}
        >
            <IconButton
                className="pagination-first"
                variant="outlined"
                onClick={handleFirstPageButtonClick}
                disabled={firstDisabled}
                aria-label={formatMessage(MESSAGES.firstText)}
            >
                <FirstPageIcon color={firstDisabled ? 'inherit' : 'primary'} />
            </IconButton>
            <IconButton
                className="pagination-previous"
                variant="outlined"
                onClick={handleBackButtonClick}
                disabled={firstDisabled}
                aria-label={formatMessage(MESSAGES.previousText)}
            >
                <KeyboardArrowLeft
                    color={firstDisabled ? 'inherit' : 'primary'}
                />
            </IconButton>
            <PageSelect
                pages={pages}
                pageIndex={pageIndex + 1}
                onPageChange={newPage => {
                    onPageChange(newPage);
                }}
            />
            <PageRowSelect
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={rowsPerPageOptions}
                selectRowsPerPage={selectRowsPerPage}
            />
            <IconButton
                className="pagination-next"
                variant="outlined"
                onClick={handleNextButtonClick}
                disabled={lastDisabled}
                aria-label={formatMessage(MESSAGES.nextText)}
            >
                <KeyboardArrowRight
                    color={lastDisabled ? 'inherit' : 'primary'}
                />
            </IconButton>
            <IconButton
                variant="outlined"
                onClick={handleLastPageButtonClick}
                disabled={lastDisabled}
                aria-label={formatMessage(MESSAGES.lastText)}
                className={classNames(
                    !countOnTop && classes.withCount,
                    'pagination-last',
                )}
            >
                <LastPageIcon color={lastDisabled ? 'inherit' : 'primary'} />
            </IconButton>
            {!countOnTop && (
                <div className={classes.count}>
                    <Count count={count} selectCount={selectCount} />
                </div>
            )}
        </Box>
    );
};

TablePaginationActions.propTypes = {
    pages: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    pageIndex: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    rowsPerPageOptions: PropTypes.array.isRequired,
    selectRowsPerPage: PropTypes.func.isRequired,
    countOnTop: PropTypes.bool.isRequired,
    selectCount: PropTypes.number.isRequired,
};

export { TablePaginationActions };
