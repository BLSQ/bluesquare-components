import React, { FunctionComponent, useCallback, useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
    Active,
    DragOverlay,
} from '@dnd-kit/core';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody } from '@material-ui/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

import { SortableRow } from './Row';
import { SortableCells } from './Cells';
import { DragItem } from './DragItem';
import { Head } from './Head';
import { Placeholder } from './Placeholder';

import { Column, Item } from './types';

type Props = {
    items: Item[];
    // eslint-disable-next-line no-unused-vars
    onChange: (items: Item[]) => void;
    columns: Column[];
    disabled?: boolean;
};

const useStyles = makeStyles(theme => ({
    table: {
        '& tr': {
            backgroundColor: 'rgba(244,244,244,1)',
        },
        '& tr:nth-of-type(even)': {
            backgroundColor: 'white',
        },
    },
    headerCell: {
        // @ts-ignore
        borderRight: `2px solid ${theme.palette.ligthGray.border}`,
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        backgroundColor: 'white',
    },
    lastHeaderCell: {
        borderRight: 'none',
    },
    sortCell: {
        padding: theme.spacing(1),
        width: 20,
    },
}));

export const SortableTable: FunctionComponent<Props> = props => {
    const { items, onChange, disabled, columns } = props;
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
                <Table size="small" className={classes.table}>
                    <Head columns={columns} />
                    <TableBody>
                        {items.length === 0 && (
                            <Placeholder colSpan={columns.length + 1} />
                        )}
                        {items.map(item => (
                            <SortableRow key={item.id} id={item.id}>
                                <SortableCells columns={columns} item={item} />
                            </SortableRow>
                        ))}
                    </TableBody>
                </Table>
            </SortableContext>
            <DragOverlay>
                <DragItem
                    activeItem={activeItem}
                    columns={columns}
                    items={items}
                />
            </DragOverlay>
        </DndContext>
    );
};
