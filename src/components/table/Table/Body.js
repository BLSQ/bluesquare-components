import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@mui/material/TableBody';

import { Row } from './Row';


const defaultRowProps = () => { };
const defaultGetObjectId = obj => obj.toString();

/**
 * @param {Object} props
 * @param {Array} [props.page]
 * @param {Function} props.getTableBodyProps
 * @param {Function} props.prepareRow
 * @param {any} [props.subComponent]
 * @param {Array} [props.sortBy]
 * @param {(row?: any, event?: any) => void} [props.onRowClick]
 * @param {Function} [props.rowProps]
 * @param {Object} [props.expanded]
 * @param {Function} [props.getObjectId]
 * @param {Function} [props.cellProps]
 */

const Body = ({
    page = [],
    getTableBodyProps,
    prepareRow,
    subComponent = undefined,
    sortBy = [],
    onRowClick = undefined,
    rowProps: userRowProps = defaultRowProps,
    expanded = {},
    getObjectId = defaultGetObjectId,
    cellProps = () => { },
}) => (
    <TableBody {...getTableBodyProps}>
        {page.map(row => {
            prepareRow(row);
            const rowProps = row.getRowProps(userRowProps(row));
            return (
                <Row
                    row={row}
                    rowProps={rowProps}
                    key={rowProps.key}
                    subComponent={subComponent}
                    sortBy={sortBy}
                    onRowClick={onRowClick}
                    cellProps={cellProps}
                    expanded={expanded[getObjectId(row.original)]}
                />
            );
        })}
    </TableBody>
);


Body.propTypes = {
    page: PropTypes.array,
    sortBy: PropTypes.array,
    getTableBodyProps: PropTypes.func.isRequired,
    prepareRow: PropTypes.func.isRequired,
    rowsPerPage: PropTypes.number,
    subComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    onRowClick: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    rowProps: PropTypes.func,
    cellProps: PropTypes.func,
    expanded: PropTypes.object,
    getObjectId: PropTypes.func,
};

export { Body };
