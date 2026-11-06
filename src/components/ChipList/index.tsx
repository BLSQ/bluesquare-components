import React, { FunctionComponent, useState } from 'react';
import { Box, Chip, Link } from '@mui/material';
import { useSafeIntl } from '../../localization/useSafeIntl';
import { MESSAGES } from './messages';

export type ChipListItem = {
    id: string | number;
    label: string;
};

type Props = {
    items: ChipListItem[];
    /** Number of chips shown before collapsing the rest behind "+N". Default: 3. */
    maxVisible?: number;
    color?:
        | 'default'
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning';
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
                <Chip
                    key={item.id}
                    label={item.label}
                    color={color}
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
                >
                    {expanded
                        ? formatMessage(MESSAGES.showLess)
                        : `+${hiddenCount}`}
                </Link>
            )}
        </Box>
    );
};
