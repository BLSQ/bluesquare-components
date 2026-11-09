import React from 'react';
import { ChipColor } from './utils';
type ColorChipProps = {
    color?: ChipColor;
    label: string;
    size?: 'small' | 'medium';
};
export declare const ColorChip: ({ color, size, ...props }: ColorChipProps) => React.JSX.Element;
export {};
