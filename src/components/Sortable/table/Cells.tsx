import React, { FunctionComponent } from 'react';
import { TableCell } from '@mui/material';

import { Item } from '../types';
import { ColumnWithAccessor } from '../../table/Table/types';

type Props = {
    columns: ColumnWithAccessor[];
    item: Item;
};

export const SortableCells: FunctionComponent<Props> = ({ columns, item }) => (
    <>
        {columns.map(column => {
            const value = item[column.accessor];
            if (!column.Cell) {
                return (
                    <TableCell key={column.accessor} align="center">
                        <>{value}</>
                    </TableCell>
                );
            }
            return (
                <TableCell key={column.accessor} align="center">
                    <>{column.Cell({ value })}</>
                </TableCell>
            );
        })}
    </>
);
