import React, {
    FunctionComponent,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';

import ArrowBack from '@mui/icons-material/ArrowBack';
import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    Tooltip,
    Typography,
} from '@mui/material';

import { useSafeIntl } from '../../localization/useSafeIntl';
import { FilterField } from './FilterField';
import { useResolveLabel } from './label';
import { MESSAGES } from './messages';
import type {
    FilterField as FilterFieldType,
    FilterLabel,
    FilterSection,
    FilterValues,
} from './types';
import { getClearedFilterValues, groupFilterFieldsBySection } from './utils';

/** Stable id assigned to the first drawer field so we can focus it on open. */
export const FILTERS_DRAWER_FIRST_INPUT_ID = 'filters-drawer-first-input';

const styles = {
    drawer: {
        maxWidth: '90vw',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
};

type Props = {
    open: boolean;
    onClose: () => void;
    fields: FilterFieldType[];
    sections?: FilterSection[];
    /** Applied values. The drawer edits a draft and only commits on APPLY. */
    values: FilterValues;
    onApply: (values: FilterValues) => void;
    title?: FilterLabel;
    anchor?: 'left' | 'right';
    width?: number;
    /** Extra content under the fields, e.g. a query builder. */
    children?: ReactNode;
};

/**
 * Side panel for editing filters. `values` is the last applied set;
 * everything typed here is a draft. APPLY commits via `onApply`,
 * CLEAR empties the draft only, and closing the drawer throws the draft
 * away so the page filters stay as they were.
 */
export const FiltersDrawer: FunctionComponent<Props> = ({
    open,
    onClose,
    fields,
    sections = [],
    values,
    onApply,
    title,
    anchor = 'right',
    width = 400,
    children,
}) => {
    const { formatMessage } = useSafeIntl();
    const resolveLabel = useResolveLabel();
    const [draft, setDraft] = useState<FilterValues>(values ?? {});

    useEffect(() => {
        if (open) setDraft({ ...(values ?? {}) });
    }, [open, values]);

    const groups = useMemo(
        () => groupFilterFieldsBySection(fields, draft, sections),
        [fields, draft, sections],
    );

    const focusFirstInput = useCallback(() => {
        document.getElementById(FILTERS_DRAWER_FIRST_INPUT_ID)?.focus();
    }, []);

    const handleChange = (key: string, value: any) =>
        setDraft(prev => ({ ...prev, [key]: value }));
    const handleClear = () => setDraft(getClearedFilterValues(fields, draft));
    const handleApply = () => {
        onApply({ ...draft });
        onClose();
    };

    return (
        <Drawer
            anchor={anchor}
            open={open}
            onClose={onClose}
            SlideProps={{ onEntered: focusFirstInput }}
        >
            <Box
                sx={{ ...styles.drawer, width }}
                role="presentation"
                data-test="filters-drawer"
            >
                <Box display="flex" alignItems="center" gap={1} px={2} py={2}>
                    <Tooltip title={formatMessage(MESSAGES.close)}>
                        <IconButton
                            onClick={onClose}
                            aria-label={formatMessage(MESSAGES.close) as string}
                        >
                            <ArrowBack />
                        </IconButton>
                    </Tooltip>
                    <Typography variant="h6">
                        {title
                            ? resolveLabel(title)
                            : formatMessage(MESSAGES.filters)}
                    </Typography>
                </Box>
                <Divider />
                <Box flexGrow={1} overflow="auto" px={3} py={2}>
                    {groups.map((group, groupIndex) => (
                        <Box key={group.key || `group-${groupIndex}`} mb={3}>
                            {group.label && (
                                <Typography
                                    variant="subtitle2"
                                    color="textSecondary"
                                    gutterBottom
                                >
                                    {resolveLabel(group.label)}
                                </Typography>
                            )}
                            <Box display="flex" flexDirection="column" gap={2}>
                                {group.fields.map((field, fieldIndex) => (
                                    <FilterField
                                        key={field.key}
                                        field={field}
                                        value={draft[field.key]}
                                        values={draft}
                                        onChange={handleChange}
                                        onEnterPressed={handleApply}
                                        inputId={
                                            groupIndex === 0 && fieldIndex === 0
                                                ? FILTERS_DRAWER_FIRST_INPUT_ID
                                                : undefined
                                        }
                                    />
                                ))}
                            </Box>
                            {groupIndex < groups.length - 1 && (
                                <Divider sx={{ mt: 3 }} />
                            )}
                        </Box>
                    ))}
                    {children}
                </Box>
                <Divider />
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    gap={1}
                    px={3}
                    py={2}
                >
                    <Button onClick={handleClear} data-test="filters-clear">
                        {formatMessage(MESSAGES.clear)}
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleApply}
                        data-test="filters-apply"
                    >
                        {formatMessage(MESSAGES.apply)}
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
};
