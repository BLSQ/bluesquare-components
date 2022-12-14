import React, { FunctionComponent, useCallback, useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
    DragOverlay,
    Active,
} from '@dnd-kit/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

import { SortableItem } from './Item';
import { Placeholder } from './Placeholder';

import { Item, RenderProps } from './types';

type Props = {
    items: any[];
    // eslint-disable-next-line no-unused-vars
    onChange: (items: any[]) => void;
    RenderItem: FunctionComponent<RenderProps>;
    handle?: boolean;
    disabled?: boolean;
};

const useStyles = makeStyles(theme => ({
    list: {
        padding: theme.spacing(1),
        margin: 0,
        listStyleType: 'none',
        // @ts-ignore
        backgroundColor: theme.palette.gray.background,
    },
    draggablelist: {
        padding: theme.spacing(0),
        margin: 0,
        listStyleType: 'none',
    },
    draggableItem: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.grey['200'],
        // @ts-ignore
        border: `1px solid ${theme.palette.grey['400']}`,
        borderRadius: 5,
        boxShadow: '-2px 8px 3px -3px rgba(0,0,0,0.15)',
    },
}));

export const SortableList: FunctionComponent<Props> = props => {
    const { items, onChange, handle = false, disabled, RenderItem } = props;
    const [activeItem, setActiveItem] = useState<Active | undefined>();
    const classes = useStyles();
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    const handleDragEnd = useCallback(
        (event: DragEndEvent) => {
            setActiveItem(undefined);
            const { active, over } = event;
            if (over && active.id !== over?.id) {
                const oldIndex: number = items.findIndex(
                    (item: Item) => item.id === active.id,
                );
                const newIndex: number = items.findIndex(
                    (item: Item) => item.id === over.id,
                );
                const newItems = arrayMove(items, oldIndex, newIndex);
                onChange(newItems);
            }
        },
        [items, onChange],
    );

    return (
        <>
            {items.length === 0 && <Placeholder />}
            {items.length > 0 && (
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                    onDragStart={({ active }) => {
                        setActiveItem(active);
                    }}
                    modifiers={[restrictToVerticalAxis]}
                >
                    <SortableContext
                        disabled={disabled}
                        items={items}
                        strategy={verticalListSortingStrategy}
                    >
                        <ul className={classes.list}>
                            {items.map((item, index) => (
                                <SortableItem
                                    handle={handle}
                                    key={item.id}
                                    id={item.id}
                                    isLast={index + 1 === items.length}
                                >
                                    {handleProps => (
                                        <RenderItem
                                            item={item}
                                            index={index}
                                            handleProps={handleProps}
                                        />
                                    )}
                                </SortableItem>
                            ))}
                        </ul>
                    </SortableContext>
                    <DragOverlay>
                        <ul className={classes.draggablelist}>
                            <li className={classes.draggableItem}>
                                <RenderItem item={activeItem} index={-1} />
                            </li>
                        </ul>
                    </DragOverlay>
                </DndContext>
            )}
        </>
    );
};
