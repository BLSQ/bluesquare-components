import React from 'react';
import { Box, Chip, useTheme } from '@mui/material';
import Color from 'color';

type ColorChipProps = {
    color?: string;
    label: string;
    size?: 'small' | 'medium';
};

export const ColorChip = ({
    color,
    size = 'small',
    ...props
}: ColorChipProps) => {
    const theme = useTheme();
    const usedColor = color ?? theme.palette.secondary.main;
    const backgroundColor = Color(usedColor).alpha(0.2).rgb().string();
    const base = Color(usedColor);
    const ink = base.darken(0.4);
    const inkColor = ink.hex();
    return (
        <Chip
            size={size}
            sx={{
                backgroundColor,
                borderColor: usedColor,
                borderWidth: 2,
                '& .MuiChip-deleteIcon': {
                    color: inkColor,
                    '&:hover, &:active': {
                        color: ink.darken(0.12).hex(),
                    },
                },
            }}
            variant="outlined"
            {...props}
            label={
                <Box component="span" sx={{ color: inkColor }}>
                    {props.label}
                </Box>
            }
        />
    );
};
