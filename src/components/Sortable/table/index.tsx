import React, {
    useMemo,
    FunctionComponent,
    useCallback,
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
    Active,
    DragOverlay,
} from '@dnd-kit/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from '@material-ui/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import classNames from 'classnames';

import { SortableRow } from './Row';
import { SortableCells } from './Cells';
import { DragItem } from './DragItem';
import { Column, Item } from './types';

type Props = {
    items: Item[];
    // eslint-disable-next-line no-unused-vars
    onChange: (items: Item[]) => void;
    columns: Column[];
    disabled?: boolean;
    // eslint-disable-next-line no-unused-vars
    getItemId?: (item: Item) => string;
};

const useStyles = makeStyles(theme => ({
    table: {
        '& tr': {
            // @ts-ignore
            backgroundColor: theme.palette.gray.background,
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
    const {
        items,
        onChange,
        disabled,
        getItemId = item => item?.id ?? '',
        columns,
    } = props;
    const [activeItem, setActiveItem] = useState<Active | undefined>();
    const classes = useStyles();
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    const ids = useMemo(() => items.map(getItemId), [items, getItemId]);
    const itemsMap = useMemo(
        () =>
            items.reduce<{ [key: string]: any }>((acc, cur) => {
                acc[getItemId(cur)] = cur;
                return acc;
            }, {}),
        [items, getItemId],
    );
    const handleDragEnd = useCallback(
        (event: DragEndEvent) => {
            setActiveItem(undefined);
            const { active, over } = event;
            if (over && active.id !== over?.id) {
                const oldIndex = ids.indexOf(active.id);
                const newIndex = ids.indexOf(over.id);
                const newIds = arrayMove(ids, oldIndex, newIndex);

                onChange(newIds.map(id => itemsMap[id]));
            }
        },
        [ids, itemsMap, onChange],
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
                items={ids}
                strategy={verticalListSortingStrategy}
            >
                <Table size="small" className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                className={classNames(
                                    classes.headerCell,
                                    classes.sortCell,
                                )}
                            />
                            {columns.map((col, ind) => (
                                <TableCell
                                    key={col.accessor}
                                    className={classNames(
                                        classes.headerCell,
                                        ind + 1 === columns.length &&
                                            classes.lastHeaderCell,
                                    )}
                                >
                                    {col.Header}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ids.map(id => (
                            <SortableRow key={id} id={id}>
                                <SortableCells
                                    columns={columns}
                                    itemsMap={itemsMap}
                                    id={id}
                                />
                            </SortableRow>
                        ))}
                    </TableBody>
                </Table>
            </SortableContext>
            <DragOverlay>
                <DragItem
                    ids={ids}
                    activeItem={activeItem}
                    columns={columns}
                    itemsMap={itemsMap}
                />
            </DragOverlay>
        </DndContext>
    );
};
