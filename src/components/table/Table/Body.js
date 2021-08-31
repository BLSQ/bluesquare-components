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
};

Body.propTypes = {
    page: PropTypes.array,
    sortBy: PropTypes.array,
    getTableBodyProps: PropTypes.func.isRequired,
    prepareRow: PropTypes.func.isRequired,
    rowsPerPage: PropTypes.number,
    subComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export { Body };
