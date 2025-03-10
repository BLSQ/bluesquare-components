import React, { FunctionComponent, useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import {
    DropdownOptions,
    FilterState,
    LoadingSpinner,
    useSafeIntl,
} from '../../..';
import { CheckBoxFilterItem } from './CheckBoxFilterItem';
import { MESSAGES } from './messages';

type Props = {
    options?: DropdownOptions<number>[];
    isLoading?: boolean;
    keyValue: string;
    filterState: FilterState;
    defaultItemCount?: number;
    title?: string;
};

/** A group of checkboxes that constitute a filter akin to a SelectInput. State and options are received from the parent. Each CheckBoxSelectGroup constitues one filter,
 * i.e one entry in a `FilterState.filters` object.
 * @component
 * @param title {string} - Title to be displayed above the group of checkboxes. Typically the filter name
 * @param keyValue {string} - the key used to retrieve the value in a FilterState.filters object
 * @param filterState {FilterState} - The parent filter's state. Typically generated using `useFilterState`
 * @param options {DropdownOptions<number>[]} - The list of possible values for the filter. Each element in the list corresponds to a checkbox
 * @param isLoading {boolean} - Can be used when options are fetched asynchronously to indicate data is being loaded
 * @param defaultItemCount (number) - The amount of items to show when `options`has many elements. If options.length > defaultItemCount, a "show more" button will be displayed. Defaults to 5
 */

export const CheckBoxSelectGroup: FunctionComponent<Props> = ({
    keyValue,
    options,
    isLoading,
    filterState,
    title,
    defaultItemCount = 5,
}) => {
    const { formatMessage } = useSafeIntl();
    const [showAll, setShowAll] = useState<boolean>(false);

    useEffect(() => {
        if (Boolean(filterState.filters[keyValue])) {
            setShowAll(true);
        }
    }, [filterState.filters[keyValue]]);

    return (
        <Grid container mb={2}>
            {title && (
                <Grid item xs={12}>
                    <Typography variant="subtitle1">{title}</Typography>
                </Grid>
            )}
            {isLoading && <LoadingSpinner fixed={false} />}
            {(options ?? []).map((option, index) => {
                if (showAll || index < defaultItemCount) {
                    return (
                        <Grid item xs={12}>
                            <CheckBoxFilterItem
                                keyValue={keyValue}
                                initialValue={(
                                    filterState.filters[keyValue] ?? ''
                                ).includes(option.value)}
                                disabled={isLoading}
                                option={option}
                                filterState={filterState}
                            />
                        </Grid>
                    );
                }
            })}
            {!Boolean(filterState.filters[keyValue]) &&
                (options?.length ?? 0) > defaultItemCount && (
                    <Grid item xs={12}>
                        <Box onClick={() => setShowAll(value => !value)}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    color: 'primary.main',
                                    cursor: 'pointer',
                                }}
                            >
                                {!showAll
                                    ? formatMessage(MESSAGES.showMore)
                                    : formatMessage(MESSAGES.showLess)}
                            </Typography>
                        </Box>
                    </Grid>
                )}
        </Grid>
    );
};
