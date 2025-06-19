import React, { ComponentProps, FunctionComponent } from 'react';
import { Chip } from '@mui/material';
type SortableChipProps = {
    id: string;
    label: string;
    onDelete?: (e: React.MouseEvent) => void;
};
export declare const SortableChip: FunctionComponent<SortableChipProps & ComponentProps<typeof Chip>>;
export {};
