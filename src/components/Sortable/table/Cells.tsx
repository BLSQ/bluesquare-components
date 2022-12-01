import React, { FunctionComponent } from 'react';
import { TableCell } from '@material-ui/core';

import { Column } from './types';

type Props = {
    columns: Column[];
    id: number | string;
    itemsMap: Record<any, any>;
};

export const SortableCells: FunctionComponent<Props> = ({
    columns,
    itemsMap,
    id,
}) => (
    <>
        {columns.map(column => {
            const value = itemsMap[id][column.accessor];
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
