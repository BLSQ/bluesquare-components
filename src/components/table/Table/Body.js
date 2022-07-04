import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';

import { Row } from './Row';

const Body = ({
    page,
    getTableBodyProps,
    prepareRow,
    subComponent,
    sortBy,
    onRowClick,
}) => (
    <TableBody {...getTableBodyProps}>
        {page.map(row => {
            prepareRow(row);
            const rowProps = row.getRowProps();
            return (
                <Row
                    row={row}
                    rowProps={rowProps}
                    key={rowProps.key}
                    subComponent={subComponent}
                    sortBy={sortBy}
                    onRowClick={onRowClick}
                />
            );
        })}
    </TableBody>
);

Body.defaultProps = {
    page: [],
    sortBy: [],
    rowsPerPage: 10,
    subComponent: undefined,
    onRowClick: undefined,
};

Body.propTypes = {
    page: PropTypes.array,
    sortBy: PropTypes.array,
    getTableBodyProps: PropTypes.func.isRequired,
    prepareRow: PropTypes.func.isRequired,
    rowsPerPage: PropTypes.number,
    subComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    onRowClick: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export { Body };
