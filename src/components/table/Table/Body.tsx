import React, { FunctionComponent } from 'react';
import TableBody from '@mui/material/TableBody';

import { Row } from './Row';

const defaultRowProps = (): Record<string, any> => ({});
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
    getTableBodyProps: () => Record<string, any>;
    prepareRow: (row: any) => void;
    page?: any[];
    sortBy?: any[];
    rowsPerPage?: number;
    subComponent?: any; //object or function
    onRowClick?: (row?: any, event?: any) => void;
    rowProps?: (row: any) => Record<string, any>;
    cellProps?: (cell: any) => Record<string, any>;
    expanded?: Record<string, any>;
    getObjectId?: (obj: any) => string;
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
    cellProps = (): Record<string, any> => ({}),
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
