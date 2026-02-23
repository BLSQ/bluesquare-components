import React, {
    FunctionComponent,
    useCallback,
    useMemo,
    useState,
} from 'react';
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
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

import { List, ListItem, SxProps } from '@mui/material';
import { SortableItem } from './Item';
import { Placeholder } from './Placeholder';

import { RenderProps } from './types';
import { Item } from '../types';
import { SxStyles } from '../../../styles/iaso/types';

type Props = {
    items: any[];
    // eslint-disable-next-line no-unused-vars
    onChange: (items: any[]) => void;
    RenderItem: FunctionComponent<RenderProps>;
    handle?: boolean;
    disabled?: boolean;
    listSx?: SxProps;
    listItemSx?: SxProps;
};

const styles: SxStyles = {
    list: {
        padding: 1,
        margin: 0,
        listStyleType: 'none',
        backgroundColor: theme => theme.palette.grey['200Ò'],
    },
    draggablelist: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',
    },
    draggableItem: {
        padding: 1,
        backgroundColor: theme => theme.palette.grey['200'],
        border: theme => `1px solid ${theme.palette.grey['400']}`,
        borderRadius: 5,
        boxShadow: '-2px 8px 3px -3px rgba(0,0,0,0.15)',
    },
};

export const SortableList: FunctionComponent<Props> = props => {
    const { items, onChange, handle = false, disabled, RenderItem } = props;
    const [activeItem, setActiveItem] = useState<Active | undefined>();
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    const listSx: SxProps = useMemo(
        () =>
            props.listSx ? { ...styles.list, ...props.listSx } : styles.list,
        [props.listSx],
    );
    const listItemSx: SxProps = useMemo(
        () =>
            props.listItemSx
                ? { ...styles.draggableItem, ...props.listItemSx }
                : styles.draggableItem,
        [props.listItemSx],
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
                        <List sx={listSx}>
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
                        </List>
                    </SortableContext>
                    <DragOverlay>
                        <List sx={styles.draggablelist}>
                            <ListItem sx={listItemSx}>
                                <RenderItem item={activeItem} index={-1} />
                            </ListItem>
                        </List>
                    </DragOverlay>
                </DndContext>
            )}
        </>
    );
};
