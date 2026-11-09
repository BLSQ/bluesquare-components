import React, { FunctionComponent, useState } from 'react';
import { Box, Link } from '@mui/material';
import { useSafeIntl } from '../../localization/useSafeIntl';
import { ColorChip } from '../chips/ColorChip';
import { ChipColor } from '../chips/utils';
import { MESSAGES } from './messages';

export type ChipListItem = {
    id: string | number;
    label: string;
    /** Overrides the list's `color` for this chip. */
    color?: ChipColor;
};

type Props = {
    items: ChipListItem[];
    /** Number of chips shown before collapsing the rest behind "+N". Default: 3. */
    maxVisible?: number;
    /** Colour of every chip, unless an item sets its own. Default: grey. */
    color?: ChipColor;
};

export const ChipList: FunctionComponent<Props> = ({
    items,
    maxVisible = 3,
    color = 'default',
}) => {
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
                    color={item.color ?? color}
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
