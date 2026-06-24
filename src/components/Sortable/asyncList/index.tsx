import React, { FC } from 'react';
import { RestrictToVerticalAxis } from '@dnd-kit/abstract/modifiers';
import { DragDropProvider } from '@dnd-kit/react';
import { List, SxProps, Theme } from '@mui/material';
import { SortableListItem } from './SortableListItem';
import { RenderAsyncListItemProps } from './types';
import { useOnDragEnd } from './useOnDragEnd';

interface ItemType {
    id: number | string;
}

type Props<T extends ItemType> = {
    items: T[];
    listSx?: SxProps<Theme>;
    itemSx?: SxProps<Theme>;
    RenderItem: FC<RenderAsyncListItemProps<T>>;
    disabled?: boolean;
    onDragEnd?: (arg0: {
        resume: () => void;
        abort: () => void;
        items: T[];
    }) => void;
};

export const AsyncSortableList: <T extends ItemType>(
    props: Props<T>,
) => React.ReactElement<Props<T>> = ({
    items = [],
    listSx,
    itemSx,
    RenderItem,
    disabled = false,
    onDragEnd,
}) => {
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
                        disabled={disabled || items.length === 1}
                    >
                        <RenderItem item={item} />
                    </SortableListItem>
                ))}
            </List>
        </DragDropProvider>
    );
};
