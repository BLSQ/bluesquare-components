import React, { FunctionComponent, useState } from 'react';
import { Box, Chip } from '@mui/material';
import { useSafeIntl } from '../../localization/useSafeIntl';
import { SxStyles } from '../../styles/iaso/types';
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

const styles: SxStyles = {
    list: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 0.5,
        minWidth: 100,
    },
    // Last chip + expand/collapse stay together so "+N" never wraps alone.
    trailingGroup: {
        display: 'inline-flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        gap: 0.5,
        maxWidth: '100%',
    },
    overflowChip: {
        backgroundColor: 'transparent',
        borderColor: theme => theme.palette.grey['500'],
        borderStyle: 'dashed',
        borderWidth: 2,
        color: 'text.primary',
        flexShrink: 0,
        '&:hover': {
            backgroundColor: 'action.hover',
        },
    },
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
    const hasOverflow = hiddenCount > 0;
    const leadingItems = hasOverflow ? visibleItems.slice(0, -1) : visibleItems;
    const trailingItem = hasOverflow
        ? visibleItems[visibleItems.length - 1]
        : null;

    const toggle = (e: React.MouseEvent) => {
        // Don't trigger a click on the table row or card around the list.
        e.stopPropagation();
        setExpanded(value => !value);
    };

    return (
        <Box sx={styles.list}>
            {leadingItems.map(item => (
                <ColorChip
                    key={item.id}
                    label={item.label}
                    color={item.color ?? color}
                    size="small"
                />
            ))}
            {trailingItem && (
                <Box sx={styles.trailingGroup}>
                    <ColorChip
                        key={trailingItem.id}
                        label={trailingItem.label}
                        color={trailingItem.color ?? color}
                        size="small"
                    />
                    <Chip
                        size="small"
                        variant="outlined"
                        onClick={toggle}
                        aria-expanded={expanded}
                        label={
                            expanded
                                ? formatMessage(MESSAGES.showLess)
                                : `+${hiddenCount}`
                        }
                        sx={styles.overflowChip}
                    />
                </Box>
            )}
        </Box>
    );
};
