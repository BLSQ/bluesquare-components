import React, { ComponentProps, FunctionComponent } from 'react';
import { Chip } from '@mui/material';
import { SxStyles } from '../../styles/iaso/types';
type SortableChipProps = {
    id: string;
    label: string;
    onDelete?: (e: React.MouseEvent) => void;
};
export declare const sortableChipStyles: SxStyles;
export declare const SortableChip: FunctionComponent<SortableChipProps & ComponentProps<typeof Chip>>;
export {};
