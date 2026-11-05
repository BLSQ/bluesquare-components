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
};

/**
 * Wires {@link ActiveFiltersBar} to {@link FiltersDrawer}.
 * `values` / `onApply` are the applied state; the drawer keeps a draft until APPLY.
 * Chip removal and CLEAR ALL call `onRemoveFilter` / `onClearAll` when set, otherwise `onApply`.
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
}) => {
    const [open, setOpen] = useState(false);
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
