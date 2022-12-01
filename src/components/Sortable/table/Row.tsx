import React, { ReactNode, FunctionComponent } from 'react';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TableRow, IconButton, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
    id: string | number;
    children: ReactNode;
};

const useStyles = makeStyles(theme => ({
    sortCell: {
        padding: theme.spacing(1),
        width: 20,
    },
}));

export const SortableRow: FunctionComponent<Props> = props => {
    const classes = useStyles();
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: props.id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <TableRow ref={setNodeRef} style={style}>
            <TableCell align="center" className={classes.sortCell}>
                <IconButton
                    size="small"
                    component="span"
                    disableRipple
                    {...attributes}
                    {...listeners}
                >
                    <DragIndicatorIcon />
                </IconButton>
            </TableCell>
            {props.children}
        </TableRow>
    );
};
