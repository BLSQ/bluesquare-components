import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableRow, TableCell, Box } from '@material-ui/core';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import classNames from 'classnames';
import { Active } from '@dnd-kit/core';

import { SortableCells } from './Cells';
import { Column, Item } from './types';

type Props = {
    items: Item[];
    columns: Column[];
    activeItem?: Active;
};

const useStyles = makeStyles(theme => ({
    draggableRow: {
        backgroundColor: theme.palette.grey['200'],
        boxShadow: '-2px 8px 3px -3px rgba(0,0,0,0.15)',
    },
    hiddenRow: {
        visibility: 'collapse',
    },
    sortCell: {
        padding: theme.spacing(1),
        width: 20,
    },
}));

export const DragItem: FunctionComponent<Props> = ({
    items,
    activeItem,
    columns,
}) => {
    const classes = useStyles();
    return (
        <Table size="small">
            <TableBody>
                {items.map(item => (
                    <TableRow
                        key={item.id}
                        className={classNames(
                            classes.draggableRow,
                            activeItem?.id !== item.id && classes.hiddenRow,
                        )}
                    >
                        <TableCell align="center" className={classes.sortCell}>
                            <Box px="3px" py="6px">
                                <DragIndicatorIcon />
                            </Box>
                        </TableCell>

                        <SortableCells columns={columns} item={item} />
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
