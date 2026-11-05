# Filters (generic)

Drop-in replacement for hand-rolled filter grids (e.g. IASO Entities
`Filters.tsx`): one field list drives **both** the right drawer and the
short bar shown on the page. Only this package is involved — the app
keeps owning routing, url params and data fetching.

## Atoms

| Export | Role |
|---|---|
| `FiltersPanel` | Composition: `ActiveFiltersBar` + `FiltersDrawer`, draft/apply wiring (`Filters` kept as deprecated alias) |
| `ActiveFiltersBar` | Short version (Paper): badge, `Label: value` chips, `+N MORE`, CLEAR ALL. Whole Paper opens the drawer |
| `FiltersDrawer` | Drawer: grouped inputs, CLEAR (draft only) / APPLY (commits), discard on close |
| `FilterField` | One field → one existing bluesquare input (`Select`, `TextInput`, `DatePicker`…) |
| `utils` (`getActiveFilters`, `getClearedFilterValues`, …) | Pure logic, tested in `utils.spec.mjs` (`npm test`) |

## Usage

```tsx
import { FiltersPanel, FilterFieldDescriptor } from 'bluesquare-components';

const fields: FilterFieldDescriptor[] = [
    { key: 'search', label: MESSAGES.search, type: 'search' },
    { key: 'dateFrom', label: MESSAGES.dateFrom, type: 'date', section: 'Period' },
    { key: 'dateTo', label: MESSAGES.dateTo, type: 'date', section: 'Period' },
    {
        key: 'projects', label: MESSAGES.projects, type: 'select', multi: true,
        section: 'Scope', options: projects, loading: isFetchingProjects,
    },
    // App-specific inputs stay in the app, via `custom`:
    {
        key: 'location', label: MESSAGES.location, type: 'custom', section: 'Scope',
        formatValue: v => orgUnitNameById(v),
        renderCustom: ({ value, onChange }) => (
            <OrgUnitTreeviewModal
                titleMessage={MESSAGES.location}
                initialSelection={/* … */}
                onConfirm={ou => onChange(ou?.id)}
            />
        ),
    },
];

{/* Page actions (Download, Create…) are NOT part of FiltersPanel:
    lay them out next to it in the page. */}
<Box display="flex" alignItems="center" gap={2}>
    <Box flexGrow={1} minWidth={0}>
        <FiltersPanel
            fields={fields}
            sections={[{ key: 'Period', label: MESSAGES.period }, { key: 'Scope', label: MESSAGES.scope }]}
            values={filters} // applied values, e.g. read from url params
            onApply={next => redirectTo(baseUrl, getParams(params, next))}
        />
    </Box>
    <CreateButton />
</Box>
```

## Contract

- **Controlled, applied values only.** The drawer edits a draft;
  `onApply` fires once on APPLY (chip removal / CLEAR ALL reuse it by
  default). Closing the drawer discards the draft.
- **Field types** mirror IASO `InputComponent`: `text`, `email`,
  `search`, `textarea`, `number`, `select` (`multi`), `checkbox`,
  `radio`, plus `date`, `daterange` (`{ from, to }`) and `custom`.
  Unknown types fall back to a text input; duplicate/missing keys are
  dropped and reported by `validateFilterFields` (console warning in dev).
- **Chips** are derived, never stored: option labels for selects,
  comma-joined multi values (`"1,2"`, the IASO url format) supported,
  `0` counts as active, a checkbox counts only when `true`.
  Override per field with `isActive` / `formatValue`.
- Hidden fields: `visible: boolean | (values) => boolean`.
