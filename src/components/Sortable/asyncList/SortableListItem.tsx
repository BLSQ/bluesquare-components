import React, { FC, ReactNode } from 'react';
import { useSortable } from '@dnd-kit/react/sortable';
import { ListItem, SxProps, Theme } from '@mui/material';

type Props = {
    id: number | string;
    index: number;
    sx?: SxProps<Theme>;
    disabled?: boolean;
    children: ReactNode;
};

export const SortableListItem: FC<Props> = ({
    id,
    index,
    sx,
    children,
    disabled = false,
}) => {
    const { ref } = useSortable({ id, index, disabled });

    return (
        <ListItem ref={ref} sx={sx}>
            {children}
        </ListItem>
    );
};
