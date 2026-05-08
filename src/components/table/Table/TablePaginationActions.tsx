import React, { FunctionComponent } from 'react';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import classNames from 'classnames';
import { useSafeIntl } from '../../../localization/useSafeIntl';
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

type Props = {
    pages: number;
    count: number;
    onPageChange: Function;
    pageIndex: number;
    rowsPerPage: number;
    rowsPerPageOptions: any[];
    selectRowsPerPage: Function;
    countOnTop: boolean;
    selectCount: number;
};

export const TablePaginationActions: FunctionComponent<Props> = ({
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
            {/* @ts-ignore */}
            <IconButton
                className="pagination-first"
                variant="outlined"
                onClick={handleFirstPageButtonClick}
                disabled={firstDisabled}
                aria-label={formatMessage(MESSAGES.firstText)}
            >
                <FirstPageIcon color={firstDisabled ? 'inherit' : 'primary'} />
            </IconButton>
            {/* @ts-ignore */}
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
            {/* @ts-ignore */}
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
            {/* @ts-ignore */}
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
