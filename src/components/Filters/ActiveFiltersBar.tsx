import React, {
    FunctionComponent,
    useCallback,
    useMemo,
    useState,
} from 'react';

import FilterListIcon from '@mui/icons-material/FilterList';
import {
    Badge,
    Box,
    Button,
    Chip,
    IconButton,
    Paper,
    Tooltip,
    Typography,
} from '@mui/material';
import type { SxProps } from '@mui/material';

import { useSafeIntl } from '../../localization/useSafeIntl';
import { useResolveLabel } from './label';
import { MESSAGES } from './messages';
import type { FilterField, FilterValues } from './types';
import { getActiveFilters, splitActiveFilters } from './utils';

type Props = {
    fields: FilterField[];
    values: FilterValues;
    /** Remove one applied filter. Omit to render read-only chips. */
    onRemoveFilter?: (key: string) => void;
    onClearAll?: () => void;
    /** Clicking the filter icon opens the drawer (wired by `Filters`). */
    onOpenFilters?: () => void;
    maxVisibleChips?: number;
    /** Paper elevation of the bar. Default: 1. */
    elevation?: number;
    sx?: SxProps;
};

export const ActiveFiltersBar: FunctionComponent<Props> = ({
    fields,
    values,
    onRemoveFilter,
    onClearAll,
    onOpenFilters,
    maxVisibleChips = 3,
    elevation = 1,
    sx,
}) => {
    const { formatMessage } = useSafeIntl();
    const resolveLabel = useResolveLabel();
    const [expanded, setExpanded] = useState(false);
    const active = useMemo(
        () =>
            getActiveFilters(fields, values, field =>
                resolveLabel(field.label, field.key),
            ),
        [fields, values, resolveLabel],
    );
    const { visible, hiddenCount } = splitActiveFilters(
        active,
        expanded ? Math.max(active.length, 1) : maxVisibleChips,
    );
    const hasActive = active.length > 0;

    const stop = (e: React.SyntheticEvent) => e.stopPropagation();
    const toggleAllChips = useCallback(
        (e: React.SyntheticEvent) => {
            stop(e);
            setExpanded(!expanded);
        },
        [expanded],
    );
    const handleClearAll = useCallback(
        (e: React.SyntheticEvent) => {
            stop(e);
            onClearAll?.();
        },
        [onClearAll],
    );

    return (
        <Paper
            elevation={elevation}
            onClick={onOpenFilters}
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                flexWrap: 'wrap',
                px: 1.5,
                py: 1,
                ...(onOpenFilters && { cursor: 'pointer' }),
                ...sx,
            }}
            data-test="active-filters-bar"
        >
            <Tooltip
                title={formatMessage(
                    hasActive
                        ? MESSAGES.activeFilters
                        : MESSAGES.noActiveFilter,
                )}
            >
                <span>
                    <IconButton
                        size="small"
                        onClick={onOpenFilters}
                        disabled={!onOpenFilters}
                        aria-label={formatMessage(MESSAGES.filters) as string}
                        data-test="active-filters-open"
                    >
                        <Badge badgeContent={active.length} color="primary">
                            <FilterListIcon fontSize="small" />
                        </Badge>
                    </IconButton>
                </span>
            </Tooltip>
            <Typography
                variant="body2"
                color={hasActive ? 'textPrimary' : 'textSecondary'}
            >
                {formatMessage(
                    hasActive
                        ? MESSAGES.activeFilters
                        : MESSAGES.noActiveFilter,
                )}
            </Typography>
            {visible.map(filter => (
                <Chip
                    key={filter.key}
                    size="small"
                    onClick={stop}
                    label={
                        filter.displayValue
                            ? `${filter.label}: ${filter.displayValue}`
                            : filter.label
                    }
                    onDelete={
                        onRemoveFilter
                            ? () => onRemoveFilter(filter.key)
                            : undefined
                    }
                    deleteIcon={
                        onRemoveFilter ? (
                            <span
                                aria-label={
                                    formatMessage(MESSAGES.removeFilter, {
                                        label: filter.label,
                                    }) as string
                                }
                            >
                                ×
                            </span>
                        ) : undefined
                    }
                    data-test={`active-filter-${filter.key}`}
                />
            ))}
            {hiddenCount > 0 && (
                <Chip
                    size="small"
                    variant="outlined"
                    label={formatMessage(MESSAGES.more, {
                        count: String(hiddenCount),
                    })}
                    onClick={e => {
                        toggleAllChips(e);
                    }}
                    data-test="active-filters-more"
                />
            )}
            {expanded && active.length > maxVisibleChips && (
                <Chip
                    size="small"
                    variant="outlined"
                    label={formatMessage(MESSAGES.showLess)}
                    onClick={e => {
                        toggleAllChips(e);
                    }}
                />
            )}
            <Box flexGrow={1} />
            {hasActive && onClearAll && (
                <Button
                    size="small"
                    onClick={handleClearAll}
                    data-test="active-filters-clear-all"
                >
                    {formatMessage(MESSAGES.clearAll)}
                </Button>
            )}
        </Paper>
    );
};
