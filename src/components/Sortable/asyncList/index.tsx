import React, { FC, FunctionComponent } from 'react';
import { RestrictToVerticalAxis } from '@dnd-kit/abstract/modifiers';
import { DragDropProvider, DragOverlay } from '@dnd-kit/react';
import { List, SxProps, Theme } from '@mui/material';
import { useOnDragEnd } from './useOnDragEnd';
import { SortableListItem } from './SortableListItem';
import { RenderAsyncListItemProps } from './types';

type Props = {
    items: any[];
    listSx?: SxProps<Theme>;
    itemSx?: SxProps<Theme>;
    RenderItem: FunctionComponent<RenderAsyncListItemProps>;
    showOverlay?: boolean;
    onDragEnd?: (arg0: {
        resume: () => void;
        abort: () => void;
        items: any[];
    }) => void;
};

export const AsyncSortableList: FC<Props> = ({
    items = [],
    listSx,
    itemSx,
    RenderItem,
    showOverlay = true,
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
                    >
                        <RenderItem item={item} index={index} />
                    </SortableListItem>
                ))}
            </List>
            {showOverlay && (
                <DragOverlay>
                    {source => <RenderItem item={source} index={-1} />}
                </DragOverlay>
            )}
        </DragDropProvider>
    );
};
