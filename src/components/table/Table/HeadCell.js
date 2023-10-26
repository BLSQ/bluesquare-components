import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import classNames from 'classnames';

import { useSafeIntl } from '../../../utils/useSafeIntl';

import { MESSAGES } from './messages';

const useStyles = makeStyles(theme => ({
    resizer: {
        display: 'inline-block',
        width: '15px',
        height: '100%',
        position: 'absolute',
        right: 0,
        top: 0,
        transform: 'translateX(50%)',
        zIndex: 1,
        touchAction: 'none',
        cursor: 'col-resize',
    },
    headerCell: {
        borderRight: `2px solid ${theme.palette.ligthGray.border}`,
        position: 'relative !important',
        overflow: 'hidden',
        textAlign: 'center !important',
        backgroundColor: 'white !important',
    },
    lastHeaderCell: {
        borderRight: 'none',
    },
    sortLabel: {
        display: 'inline-block !important',
        width: '80% !important',
    },
    icon: {
        color: `${theme.palette.primary.main}!important`,
        position: 'absolute',
        left: '100%',
        top: 3,
    },
    cell: {
        cursor: 'default',
    },
}));
const HeadCell = ({
    column,
    columnsProps,
    setSortBy,
    multiSortEnabled,
    sortBy,
    isLastCell,
}) => {
    const classes = useStyles();
    const { formatMessage } = useSafeIntl();
    const isColumnNotEmpty =
        column.Header.length > 0 ||
        isValidElement(column.Header) ||
        column.parent;
    const isSortable =
        isColumnNotEmpty && column.sortable !== false && !column.isResizing;
    let direction;
    let title = MESSAGES.sortAsc;

    if (column.isSorted) {
        if (column.isSortedDesc) {
            direction = 'desc';
        } else {
            direction = 'asc';
            title = MESSAGES.sortDesc;
        }
    }

    const cellStyle = {
        width: column.width ?? 'auto',
    };

    const sortProps = { ...column.getSortByToggleProps() };
    sortProps.onClick = () => {
        let newSort = [];
        const currentSort = {
            desc: direction === 'asc',
            id: column.id,
        };
        if (!multiSortEnabled) {
            newSort.push(currentSort);
        } else {
            newSort = [
                ...sortBy.filter(sort => sort.id !== column.id),
                currentSort,
            ];
        }
        setSortBy(newSort);
    };
    return (
        <TableCell
            {...columnsProps}
            style={cellStyle}
            className={classNames(
                classes.headerCell,
                isLastCell && classes.lastHeaderCell,
            )}
            key={columnsProps.key}
        >
            {isSortable && (
                <div {...sortProps}>
                    <TableSortLabel
                        active={column.isSorted}
                        direction={direction}
                        title={formatMessage(title)}
                        classes={{
                            root: classes.sortLabel,
                            icon: classes.icon,
                        }}
                    >
                        {column.render('Header')}
                    </TableSortLabel>
                </div>
            )}
            {!isSortable && (
                <div className={classes.cell}>{column.render('Header')}</div>
            )}
            {column.resizable !== false && (
                <div
                    {...column.getResizerProps()}
                    className={classes.resizer}
                />
            )}
        </TableCell>
    );
};

HeadCell.propTypes = {
    column: PropTypes.object.isRequired,
    columnsProps: PropTypes.object.isRequired,
    setSortBy: PropTypes.func.isRequired,
    multiSortEnabled: PropTypes.bool.isRequired,
    sortBy: PropTypes.array.isRequired,
    isLastCell: PropTypes.bool.isRequired,
};

export { HeadCell };
