import React, { FC, FunctionComponent } from 'react';
import { RestrictToVerticalAxis } from '@dnd-kit/abstract/modifiers';
import { DragDropProvider, DragOverlay } from '@dnd-kit/react';
import { List, ListItem, SxProps, Theme } from '@mui/material';
import { useOnDragEnd } from './useOnDragEnd';
import { SortableListItem } from './SortableListItem';
import { RenderAsyncListItemProps } from './types';

interface ItemType {
    id: number | string;
}

type Props<T extends ItemType> = {
    items: T[];
    listSx?: SxProps<Theme>;
    itemSx?: SxProps<Theme>;
    RenderItem: FunctionComponent<RenderAsyncListItemProps<T>>;
    showOverlay?: boolean;
    onDragEnd?: (arg0: {
        resume: () => void;
        abort: () => void;
        items: T[];
    }) => void;
};

export const AsyncSortableList = <T extends ItemType>({
    items = [],
    listSx,
    itemSx,
    RenderItem,
    showOverlay = true,
    onDragEnd,
}: Props<T>) => {
    const handleOnDragEnd = useOnDragEnd(items, onDragEnd);

    return (
        <DragDropProvider
            onDragEnd={handleOnDragEnd}
            modifiers={[RestrictToVerticalAxis]}
        >
            <List sx={listSx}>
                {items.map((item, index) => (
                    <SortableListItem
                        sx={itemSx}
                        key={item.id}
                        id={item.id ?? 0}
                        index={index}
                    >
                        <RenderItem item={item} />
                    </SortableListItem>
                ))}
            </List>
            {showOverlay && (
                <DragOverlay>
                    {source => (
                        <ListItem sx={itemSx}>
                            <RenderItem item={source.data.current} />
                        </ListItem>
                    )}
                </DragOverlay>
            )}
        </DragDropProvider>
    );
};
