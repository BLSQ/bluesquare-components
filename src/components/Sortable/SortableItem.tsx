import React, { ReactNode, FunctionComponent } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { makeStyles } from '@material-ui/core/styles';
import { CSS } from '@dnd-kit/utilities';
// import { MenuIcon } from '@heroicons/react/outline';

type Props = {
    id: string;
    // eslint-disable-next-line no-unused-vars
    children: (handleProps: any) => ReactNode;
    handle?: boolean;
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
}));

export const SortableItem: FunctionComponent<Props> = props => {
    const classes = useStyles();
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const elmProps = props.handle
        ? {}
        : {
              ...attributes,
              ...listeners,
          };

    return (
        <li
            ref={setNodeRef}
            style={style}
            className={classes.item}
            {...elmProps}
        >
            {props.children(
                props.handle ? { ...attributes, ...listeners } : undefined,
            )}
        </li>
    );
};
