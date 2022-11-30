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
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

import { SortableItem } from './SortableItem';

type RenderProps = {
    item: any;
    index: number;
    handleProps?: any;
};

type Props = {
    items: any[];
    handle?: boolean;
    disabled?: boolean;
    // eslint-disable-next-line no-unused-vars
    onChange: (items: any[]) => void;
    // eslint-disable-next-line no-unused-vars
    renderItem: ({ item, index, handleProps }: RenderProps) => ReactNode;
    // eslint-disable-next-line no-unused-vars
    getItemId?: (item: any) => string;
};

const useStyles = makeStyles(theme => ({
    list: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',
    },
    item: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.grey['200'],
        // @ts-ignore
        border: `1px solid ${theme.palette.grey['400']}`,
        borderRadius: 5,
    },
}));

export const SortableList: FunctionComponent<Props> = props => {
    const {
        items,
        onChange,
        handle = false,
        disabled,
        renderItem,
        getItemId = item => item?.id ?? '',
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
            if (active.id !== over?.id) {
                const oldIndex = ids.indexOf(active.id);
                const newIndex = ids.indexOf(over?.id);
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
                <ul className={classes.list}>
                    {ids.map((id, index) => (
                        <SortableItem handle={handle} key={id} id={id}>
                            {handleProps =>
                                renderItem({
                                    item: itemsMap[id],
                                    index,
                                    handleProps,
                                })
                            }
                        </SortableItem>
                    ))}
                </ul>
            </SortableContext>
            <DragOverlay>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        {renderItem({
                            item: activeItem,
                            index: -1,
                        })}
                    </li>
                </ul>
            </DragOverlay>
        </DndContext>
    );
};
