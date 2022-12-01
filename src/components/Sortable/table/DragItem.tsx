import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableRow, TableCell, Box } from '@material-ui/core';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import classNames from 'classnames';
import { Active } from '@dnd-kit/core';

import { SortableCells } from './Cells';
import { Column } from './types';

type Props = {
    ids: (string | number)[];
    activeItem?: Active;
    columns: Column[];
    itemsMap: Record<any, any>;
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
    ids,
    activeItem,
    columns,
    itemsMap,
}) => {
    const classes = useStyles();
    return (
        <Table size="small">
            <TableBody>
                {ids.map(id => (
                    <TableRow
                        key={id}
                        className={classNames(
                            classes.draggableRow,
                            activeItem?.id !== id && classes.hiddenRow,
                        )}
                    >
                        <TableCell align="center" className={classes.sortCell}>
                            <Box px="3px" py="6px">
                                <DragIndicatorIcon />
                            </Box>
                        </TableCell>

                        <SortableCells
                            columns={columns}
                            itemsMap={itemsMap}
                            id={id}
                        />
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
