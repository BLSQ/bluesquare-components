import React from 'react';
type ColorChipProps = {
    color?: string;
    label: string;
    size?: 'small' | 'medium';
};
export declare const ColorChip: ({ color, size, ...props }: ColorChipProps) => React.JSX.Element;
export {};
