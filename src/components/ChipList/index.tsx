import React, { FunctionComponent, useState } from 'react';
import { Box, Link, Theme, useTheme } from '@mui/material';
import { useSafeIntl } from '../../localization/useSafeIntl';
import { ColorChip } from '../chips/ColorChip';
import { MESSAGES } from './messages';

const PALETTE_COLORS = [
    'primary',
    'secondary',
    'error',
    'info',
    'success',
    'warning',
] as const;

type PaletteColor = (typeof PALETTE_COLORS)[number];

/** A theme colour name, `'default'` (grey), or any CSS colour (`#4dd0e1`, `red`...). */
export type ChipListColor = 'default' | PaletteColor | (string & {});

export type ChipListItem = {
    id: string | number;
    label: string;
    /** Overrides the list's `color` for this chip. */
    color?: ChipListColor;
};

// ColorChip passes its colour to the `color` library, which only understands
// CSS colours, so theme names have to be turned into real values first.
const resolveColor = (theme: Theme, color: ChipListColor): string => {
    if (color === 'default') return theme.palette.grey[500];
    if ((PALETTE_COLORS as readonly string[]).includes(color)) {
        return theme.palette[color as PaletteColor].main;
    }
    return color;
};

type Props = {
    items: ChipListItem[];
    /** Number of chips shown before collapsing the rest behind "+N". Default: 3. */
    maxVisible?: number;
    /** Colour of every chip, unless an item sets its own. Default: grey. */
    color?: ChipListColor;
};

export const ChipList: FunctionComponent<Props> = ({
    items,
    maxVisible = 3,
    color = 'default',
}) => {
    const theme = useTheme();
    const { formatMessage } = useSafeIntl();
    const [expanded, setExpanded] = useState(false);

    const hiddenCount = items.length - maxVisible;
    const visibleItems = expanded ? items : items.slice(0, maxVisible);

    const toggle = (e: React.MouseEvent) => {
        // Don't trigger a click on the table row or card around the list.
        e.stopPropagation();
        setExpanded(value => !value);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 0.5,
            }}
        >
            {visibleItems.map(item => (
                <ColorChip
                    key={item.id}
                    label={item.label}
                    color={resolveColor(theme, item.color ?? color)}
                    size="small"
                />
            ))}
            {hiddenCount > 0 && (
                <Link
                    component="button"
                    type="button"
                    variant="body2"
                    onClick={toggle}
                    aria-expanded={expanded}
                    color="primary"
                    sx={{ ml: 0.5 }}
                >
                    {expanded
                        ? formatMessage(MESSAGES.showLess)
                        : `+${hiddenCount}`}
                </Link>
            )}
        </Box>
    );
};
