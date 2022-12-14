import React, { ReactNode, FunctionComponent } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { makeStyles } from '@material-ui/core/styles';
import { CSS, Transform } from '@dnd-kit/utilities';
import classNames from 'classnames';

import { DraggableAttributes } from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

import { HandleProps } from './types';

type Props = {
    id: string;
    // eslint-disable-next-line no-unused-vars
    children: (handleProps?: HandleProps) => ReactNode;
    handle?: boolean;
    isLast?: boolean;
};
const useStyles = makeStyles(theme => ({
    item: {
        padding: theme.spacing(1),
        backgroundColor: 'white',
        // @ts-ignore
        border: `1px solid ${theme.palette.grey['200']}`,
        borderRadius: 5,
        marginBottom: theme.spacing(1),
    },
    lastItem: {
        marginBottom: theme.spacing(0),
    },
}));

type UseSortable = {
    attributes: DraggableAttributes;
    listeners?: SyntheticListenerMap;
    // eslint-disable-next-line no-unused-vars
    setNodeRef: (node: HTMLElement | null) => void;
    transform: Transform | null;
    transition: string | undefined;
};

export const SortableItem: FunctionComponent<Props> = ({
    id,
    handle,
    children,
    isLast = false,
}) => {
    const classes = useStyles();
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    }: UseSortable = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const handleProps = {
        ...attributes,
        ...listeners,
    } as HandleProps;

    const elmProps = handle ? undefined : handleProps;
    return (
        <li
            ref={setNodeRef}
            style={style}
            className={classNames(classes.item, isLast && classes.lastItem)}
            {...elmProps}
        >
            {children(handle ? handleProps : undefined)}
        </li>
    );
};
