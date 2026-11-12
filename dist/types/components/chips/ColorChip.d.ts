import React, { ReactElement } from 'react';
import { ChipColor } from './utils';
type ColorChipProps = {
    color?: ChipColor;
    label: string;
    size?: 'small' | 'medium';
    icon?: ReactElement;
    /** Native tooltip, e.g. the full value of a shortened label. */
    title?: string;
};
export declare const ColorChip: ({ color, size, ...props }: ColorChipProps) => React.JSX.Element;
export {};
