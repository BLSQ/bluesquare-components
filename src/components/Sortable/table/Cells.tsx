import React, { FunctionComponent } from 'react';
import { TableCell } from '@material-ui/core';

import { Column, Item } from './types';

type Props = {
    columns: Column[];
    item: Item;
};

export const SortableCells: FunctionComponent<Props> = ({ columns, item }) => (
    <>
        {columns.map(column => {
            const value = item[column.accessor];
            if (!column.Cell) {
                return (
                    <TableCell key={column.accessor} align="center">
                        {value}
                    </TableCell>
                );
            }
            return (
                <TableCell key={column.accessor} align="center">
                    {column.Cell({ value })}
                </TableCell>
            );
        })}
    </>
);
