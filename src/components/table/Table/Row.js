import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.gray.background,
        },
        '&:nth-of-type(even)': {
            backgroundColor: 'transparent',
        },
    },
}));
const Row = ({ row, rowProps, subComponent }) => {
    const classes = useStyles();
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <>
            <TableRow {...rowProps} className={classes.row} key={rowProps.key}>
                {row.cells.map(cell => {
                    const cellProps = cell.getCellProps();
                    const align = cell.column.align || 'center';
                    return (
                        <TableCell
                            {...cellProps}
                            key={cellProps.key}
                            align={
                                cell.column.id === 'actions' ? 'center' : align
                            }
                        >
                            {!cell.column.expander && cell.render('Cell')}
                            {cell.column.expander &&
                                cell.render('Expander', {
                                    isExpanded,
                                    setIsExpanded,
                                })}
                        </TableCell>
                    );
                })}
            </TableRow>
            {isExpanded && subComponent && (
                <TableRow
                    {...rowProps}
                    key={`${rowProps.key}-expand`}
                    className={classes.row}
                >
                    <TableCell colSpan={row.cells.length}>
                        {subComponent(row.original)}
                    </TableCell>
                </TableRow>
            )}
        </>
    );
};

Row.defaultProps = {
    subComponent: undefined,
};

Row.propTypes = {
    row: PropTypes.object.isRequired,
    rowProps: PropTypes.object.isRequired,
    subComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export { Row };
