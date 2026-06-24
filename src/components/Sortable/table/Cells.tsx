import React, { FunctionComponent } from 'react';
import { TableCell } from '@mui/material';

import { ColumnWithAccessor } from '../../table/Table/types';
import { Item } from '../types';

type Props = {
    columns: ColumnWithAccessor[];
    item: Item;
};

export const SortableCells: FunctionComponent<Props> = ({ columns, item }) => (
    <>
        {columns.map(column => {
            // This will error if we use a function accessor
            const value = item[column.accessor as string];
            if (!column.Cell) {
                return (
                    <TableCell key={`${column.accessor}`} align="center">
                        <>{value}</>
                    </TableCell>
                );
            }
            return (
                <TableCell key={`${column.accessor}`} align="center">
                    <>{column.Cell({ value })}</>
                </TableCell>
            );
        })}
    </>
);
