import React, { FunctionComponent, useMemo, useState } from 'react';

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
import { makeResolveLabel } from './label';
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

/**
 * Short version of the filters for the main page (screenshots 1/2/4):
 * badge count, `Label: value` chips, `+N MORE`, CLEAR ALL.
 */
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
    const resolve = makeResolveLabel(m => formatMessage(m) as string);
    const [expanded, setExpanded] = useState(false);
    const active = useMemo(
        () =>
            getActiveFilters(fields, values, field =>
                resolve(field.label, field.key),
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [fields, values],
    );
    const { visible, hiddenCount } = splitActiveFilters(
        active,
        expanded ? Math.max(active.length, 1) : maxVisibleChips,
    );
    const hasActive = active.length > 0;

    const stop = (e: React.SyntheticEvent) => e.stopPropagation();
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
                        stop(e);
                        setExpanded(true);
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
                        stop(e);
                        setExpanded(false);
                    }}
                />
            )}
            <Box flexGrow={1} />
            {hasActive && onClearAll && (
                <Button
                    size="small"
                    onClick={e => {
                        stop(e);
                        onClearAll();
                    }}
                    data-test="active-filters-clear-all"
                >
                    {formatMessage(MESSAGES.clearAll)}
                </Button>
            )}
        </Paper>
    );
};
