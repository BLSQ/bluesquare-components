import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';

import { Row } from './Row';

const Body = ({
    page,
    getTableBodyProps,
    prepareRow,
    rowsPerPage,
    subComponent,
}) => {
    const rows = page.slice(0, rowsPerPage);
    return (
        <TableBody {...getTableBodyProps}>
            {rows.map(row => {
                prepareRow(row);
                const rowProps = row.getRowProps();
                return (
                    <Row
                        row={row}
                        rowProps={rowProps}
                        key={rowProps.key}
                        subComponent={subComponent}
                    />
                );
            })}
        </TableBody>
    );
};

Body.defaultProps = {
    page: [],
    rowsPerPage: 10,
    subComponent: undefined,
};

Body.propTypes = {
    page: PropTypes.array,
    getTableBodyProps: PropTypes.func.isRequired,
    prepareRow: PropTypes.func.isRequired,
    rowsPerPage: PropTypes.number,
    subComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export { Body };
