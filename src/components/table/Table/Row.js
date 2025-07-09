import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import { CellContentWithErrorBoundary } from './CellContentWithErrorBoundary';

const useStyles = makeStyles(theme => ({
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.gray.background,
        },
        '&:nth-of-type(even)': {
            backgroundColor: 'transparent',
        },
    },
    rowClickable: {
        cursor: 'pointer',
        '&:hover': {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.grey['300'],
            },
            '&:nth-of-type(even)': {
                backgroundColor: theme.palette.grey['300'],
            },
        },
    },
    cell: {
        padding: theme.spacing(1, 2),
    },
}));

const Row = ({
    row,
    rowProps,
    subComponent,
    sortBy,
    onRowClick,
    expanded,
    cellProps: userCellProps,
}) => {
    const classes = useStyles();
    const [isExpanded, setIsExpanded] = useState(expanded);
    useEffect(() => {
        if (isExpanded !== expanded) {
            setIsExpanded(expanded);
        }
    }, [sortBy, expanded]);
    return (
        <>
            <TableRow
                {...rowProps}
                onClick={event =>
                    onRowClick ? onRowClick(row.original, event) : null
                }
                className={classNames(
                    classes.row,
                    Boolean(onRowClick) && classes.rowClickable,
                    rowProps.className ?? '',
                )}
                key={rowProps.key}
            >
                {row.cells.map(cell => {
                    const cellProps = cell.getCellProps(userCellProps(cell));
                    const align = cell.column.align || 'center';
                    return (
                        <TableCell
                            {...cellProps}
                            key={cellProps.key}
                            className={classNames(
                                classes.cell,
                                cellProps.className ?? '',
                            )}
                            align={
                                cell.column.id === 'actions' ? 'center' : align
                            }
                        >
                            <CellContentWithErrorBoundary value={cell.value}>
                                {!cell.column.expander && cell.render('Cell')}
                                {cell.column.expander &&
                                    cell.render('Expander', {
                                        isExpanded,
                                        setIsExpanded,
                                    })}
                            </CellContentWithErrorBoundary>
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
    sortBy: [],
    onRowClick: undefined,
    expanded: false,
    cellProps: () => {},
};

Row.propTypes = {
    sortBy: PropTypes.array,
    row: PropTypes.object.isRequired,
    rowProps: PropTypes.object.isRequired,
    subComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    onRowClick: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    expanded: PropTypes.bool,
    cellProps: PropTypes.func,
};

export { Row };
