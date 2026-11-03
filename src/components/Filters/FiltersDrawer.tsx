import React, {
    FunctionComponent,
    ReactNode,
    useEffect,
    useMemo,
    useRef,
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
import { makeResolveLabel } from './label';
import { MESSAGES } from './messages';
import type {
    FilterField as FilterFieldType,
    FilterLabel,
    FilterSection,
    FilterValues,
} from './types';
import {
    getClearedFilterValues,
    groupFilterFieldsBySection,
    validateFilterFields,
} from './utils';

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
 * Right drawer from screenshot 3: grouped inputs, CLEAR / APPLY footer.
 * CLEAR only resets the draft; closing without APPLY discards it.
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
    const resolve = makeResolveLabel(m => formatMessage(m) as string);
    const [draft, setDraft] = useState<FilterValues>(values ?? {});
    const warnedRef = useRef(false);

    useEffect(() => {
        if (open) setDraft({ ...(values ?? {}) });
    }, [open, values]);

    useEffect(() => {
        if (process.env.NODE_ENV !== 'production' && !warnedRef.current) {
            const issues = validateFilterFields(fields);
            if (issues.length > 0) {
                warnedRef.current = true;

                console.warn('[blsq Filters]', ...issues);
            }
        }
    }, [fields]);

    const groups = useMemo(
        () => groupFilterFieldsBySection(fields, draft, sections),
        [fields, draft, sections],
    );

    const handleChange = (key: string, value: any) =>
        setDraft(prev => ({ ...prev, [key]: value }));
    const handleClear = () => setDraft(getClearedFilterValues(fields, draft));
    const handleApply = () => {
        onApply({ ...draft });
        onClose();
    };

    return (
        <Drawer anchor={anchor} open={open} onClose={onClose}>
            <Box
                sx={{
                    width,
                    maxWidth: '90vw',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
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
                            ? resolve(title)
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
                                    {resolve(group.label)}
                                </Typography>
                            )}
                            <Box display="flex" flexDirection="column" gap={2}>
                                {group.fields.map(field => (
                                    <FilterField
                                        key={field.key}
                                        field={field}
                                        value={draft[field.key]}
                                        values={draft}
                                        onChange={handleChange}
                                        onEnterPressed={handleApply}
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
