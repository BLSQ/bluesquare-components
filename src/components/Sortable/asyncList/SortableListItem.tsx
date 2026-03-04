import React, { FC, ReactNode } from 'react';
import { useSortable } from '@dnd-kit/react/sortable';
import { ListItem, SxProps, Theme } from '@mui/material';

type Props = {
    id: number;
    index: number;
    sx?: SxProps<Theme>;
    children: ReactNode;
};

export const SortableListItem: FC<Props> = ({ id, index, sx, children }) => {
    const { ref } = useSortable({ id, index });

    return (
        <ListItem ref={ref} sx={sx}>
            {children}
        </ListItem>
    );
};
