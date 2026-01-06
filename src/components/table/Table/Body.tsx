import React, { FunctionComponent } from 'react';
import TableBody from '@mui/material/TableBody';

import { Row } from './Row';

const defaultRowProps = () => {};
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

type Props = {
    getTableBodyProps: Function;
    prepareRow: Function;
    page?: any[];
    sortBy?: any[];
    rowsPerPage?: number;
    subComponent?: Function | Record<string, any>;
    onRowClick?: (row?: any, event?: any) => void;
    rowProps?: Function;
    cellProps?: Function;
    expanded?: Record<string, any>;
    getObjectId?: Function;
};

export const Body: FunctionComponent<Props> = ({
    page = [],
    getTableBodyProps,
    prepareRow,
    subComponent = undefined,
    sortBy = [],
    onRowClick = undefined,
    rowProps: userRowProps = defaultRowProps,
    expanded = {},
    getObjectId = defaultGetObjectId,
    cellProps = () => {},
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
