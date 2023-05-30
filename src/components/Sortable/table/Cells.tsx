import React, { FunctionComponent } from 'react';
import { TableCell } from '@material-ui/core';

import { ColumnWithAccessor } from './types';
import { Item } from '../types';

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
