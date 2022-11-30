import React, { ReactNode, FunctionComponent } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TableRow } from '@material-ui/core';
// import { MenuIcon } from '@heroicons/react/outline';

type Props = {
    id: string | number;
    // eslint-disable-next-line no-unused-vars
    children: (handleProps: any) => ReactNode;
};

export const SortableRow: FunctionComponent<Props> = props => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: props.id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <TableRow ref={setNodeRef} style={style}>
            {props.children({ ...attributes, ...listeners })}
        </TableRow>
    );
};
