import React from 'react';
import { ChipPropsColorOverrides } from '@mui/material/Chip';
import { OverridableStringUnion } from '@mui/types';
type ColorChipProps = {
    color?: OverridableStringUnion<'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning', ChipPropsColorOverrides> | undefined | string;
    label: string;
    size?: 'small' | 'medium';
};
export declare const ColorChip: ({ color, size, ...props }: ColorChipProps) => React.JSX.Element;
export {};
