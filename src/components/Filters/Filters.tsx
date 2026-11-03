import React, { FunctionComponent, ReactNode, useState } from 'react';

import { ActiveFiltersBar } from './ActiveFiltersBar';
import { FiltersDrawer } from './FiltersDrawer';
import type {
    FilterField,
    FilterLabel,
    FilterSection,
    FilterValues,
} from './types';
import { getClearedFilterValues, removeFilterFromValues } from './utils';

type Props = {
    fields: FilterField[];
    sections?: FilterSection[];
    /** Applied values (controlled — e.g. mirrored in the url by the app). */
    values: FilterValues;
    /** Called on APPLY, on chip removal and on CLEAR ALL. */
    onApply: (values: FilterValues) => void;
    onRemoveFilter?: (key: string, values: FilterValues) => void;
    onClearAll?: (values: FilterValues) => void;
    maxVisibleChips?: number;
    /** Paper elevation of the active-filters bar. Default: 1. */
    elevation?: number;
    drawerTitle?: FilterLabel;
    drawerChildren?: ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
};

/**
 * Composition of {@link ActiveFiltersBar} + {@link FiltersDrawer}:
 * the drop-in replacement for hand-rolled filter grids.
 * For full control, use the two atoms separately.
 */
export const FiltersPanel: FunctionComponent<Props> = ({
    fields,
    sections,
    values,
    onApply,
    onRemoveFilter,
    onClearAll,
    maxVisibleChips,
    elevation,
    drawerTitle,
    drawerChildren,
    open: openProp,
    onOpenChange,
}) => {
    const [openInternal, setOpenInternal] = useState(false);
    const open = openProp ?? openInternal;
    const setOpen = (next: boolean) => {
        if (openProp === undefined) setOpenInternal(next);
        onOpenChange?.(next);
    };
    return (
        <>
            <ActiveFiltersBar
                fields={fields}
                values={values}
                maxVisibleChips={maxVisibleChips}
                elevation={elevation}
                onOpenFilters={() => setOpen(true)}
                onRemoveFilter={key =>
                    onRemoveFilter
                        ? onRemoveFilter(
                              key,
                              removeFilterFromValues(values, key, fields),
                          )
                        : onApply(removeFilterFromValues(values, key, fields))
                }
                onClearAll={() =>
                    onClearAll
                        ? onClearAll(getClearedFilterValues(fields, values))
                        : onApply(getClearedFilterValues(fields, values))
                }
            />
            <FiltersDrawer
                open={open}
                onClose={() => setOpen(false)}
                fields={fields}
                sections={sections}
                values={values}
                onApply={onApply}
                title={drawerTitle}
            >
                {drawerChildren}
            </FiltersDrawer>
        </>
    );
};

/** @deprecated Use {@link FiltersPanel}. */
export const Filters = FiltersPanel;
