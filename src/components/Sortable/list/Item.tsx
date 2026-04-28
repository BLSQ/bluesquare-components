import React, { ReactNode, FunctionComponent } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { makeStyles } from '@mui/styles';
import { CSS, Transform } from '@dnd-kit/utilities';
import classNames from 'classnames';

import { DraggableAttributes } from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

import { ListItem, SxProps, Theme } from '@mui/material';
import { HandleProps } from './types';

type Props = {
    id: string | number;
    // eslint-disable-next-line no-unused-vars
    children: (handleProps?: HandleProps) => ReactNode;
    handle?: boolean;
    sx?: SxProps<Theme> | undefined;
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
    sx,
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
        <ListItem
            ref={setNodeRef}
            style={style}
            className={classNames(classes.item, isLast && classes.lastItem)}
            sx={sx}
            {...elmProps}
        >
            {children(handle ? handleProps : undefined)}
        </ListItem>
    );
};
