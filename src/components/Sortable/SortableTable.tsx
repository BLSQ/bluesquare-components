import React, {
    ReactNode,
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
    DragOverlay,
    Active,
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

import { SortableRow } from './SortableRow';

type RenderProps = {
    item: any;
    index: number;
    handleProps?: any;
};

type Item = {
    id: string | number;
};

type Props = {
    items: Item[];
    disabled?: boolean;
    // eslint-disable-next-line no-unused-vars
    onChange: (items: Item[]) => void;
    // eslint-disable-next-line no-unused-vars
    renderItem: ({ item, index, handleProps }: RenderProps) => ReactNode;
    // eslint-disable-next-line no-unused-vars
    getItemId?: (item: Item) => string;
    headers?: string[];
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
    draggableRow: {
        backgroundColor: theme.palette.grey['400'],
        opacity: 0.8,
    },
    hiddenRow: {
        visibility: 'collapse',
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
}));

export const SortableTable: FunctionComponent<Props> = props => {
    const {
        items,
        onChange,
        disabled,
        renderItem,
        getItemId = item => item?.id ?? '',
        headers,
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
                    {headers && (
                        <TableHead>
                            {headers.map((header, ind) => (
                                <TableCell
                                    className={classNames(
                                        classes.headerCell,
                                        ind + 1 === headers.length &&
                                            classes.lastHeaderCell,
                                    )}
                                >
                                    {header}
                                </TableCell>
                            ))}
                        </TableHead>
                    )}
                    <TableBody>
                        {ids.map((id, index) => (
                            <SortableRow key={id} id={id}>
                                {handleProps =>
                                    renderItem({
                                        item: itemsMap[id],
                                        index,
                                        handleProps,
                                    })
                                }
                            </SortableRow>
                        ))}
                    </TableBody>
                </Table>
            </SortableContext>
            <DragOverlay>
                <Table size="small">
                    <TableBody>
                        {ids.map((id, index) => (
                            <TableRow
                                key={id}
                                className={classNames(
                                    classes.draggableRow,
                                    activeItem?.id !== id && classes.hiddenRow,
                                )}
                            >
                                {renderItem({
                                    item: itemsMap[id],
                                    index,
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </DragOverlay>
        </DndContext>
    );
};
