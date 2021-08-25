import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

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
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        backgroundColor: 'white',
    },
    sortLabel: {
        display: 'inline-block',
        width: '80%',
    },
    icon: {
        color: `${theme.palette.primary.main}!important`,
        position: 'absolute',
        left: '100%',
        top: 3,
    },
}));
const HeadCell = ({ column, columnsProps }) => {
    const classes = useStyles();
    const isSortable = column.sortable !== false && !column.isResizing;
    let direction;
    if (column.isSorted) {
        if (column.isSortedDesc) {
            direction = 'desc';
        }
        if (column.isSortedAsc) {
            direction = 'asc';
        }
    }

    const cellStyle = {
        width: column.width ?? 'auto',
    };
    return (
        <TableCell
            {...columnsProps}
            style={cellStyle}
            className={classes.headerCell}
            key={columnsProps.key}
        >
            {isSortable && (
                <div {...column.getSortByToggleProps()}>
                    <TableSortLabel
                        active={column.isSorted}
                        direction={direction}
                        classes={{
                            root: classes.sortLabel,
                            icon: classes.icon,
                        }}
                    >
                        {column.render('Header')}
                    </TableSortLabel>
                </div>
            )}
            {!isSortable && column.render('Header')}
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
};

export { HeadCell };
