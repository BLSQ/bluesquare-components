import type { MouseEvent, ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { IntlMessage } from '../../../types/types';

/** A label can be a plain (already translated) string or an intl message descriptor. */
export type ActionLabel = IntlMessage | string;

/** MUI palette colour, or any CSS / theme-path colour (e.g. `'error.main'`, `'#b71c1c'`). */
export type ActionColor = string;

export type ActionButtonSize = 'small' | 'medium' | 'large';
export type ActionIconSize = 'small' | 'medium' | 'large' | 'inherit';

export type ActionPlacement = 'auto' | 'inline' | 'menu';

export type ActionRenderContext = {
    action: TableAction;
    /** Close the overflow menu (no-op when rendered inline). */
    closeMenu: () => void;
    /** True when rendered inside the overflow menu, false when rendered inline. */
    inMenu: boolean;
};

type BaseAction = {
    /** Unique within the cell. Required for actions, optional for dividers/headers. */
    key?: string;
    /** Drop the entry entirely (permissions, feature flags, missing data, …). */
    hidden?: boolean;
    /**
     * Where the action should live:
     * - `auto` (default): inline until `maxInline` is reached, then overflow menu
     * - `inline`: always inline (still spills to the menu if `maxInline` is exceeded)
     * - `menu`: always in the overflow menu
     * Actions with `children` are always rendered in the menu (submenu).
     */
    placement?: ActionPlacement;
};

export type ActionItem = BaseAction & {
    type?: 'action';
    label?: ActionLabel;
    /** Rendered in the menu and inline. Any ReactNode, e.g. `<EditIcon />`. */
    icon?: ReactNode;
    /** Tooltip for the inline icon. Falls back to `label`. */
    tooltip?: ActionLabel;
    /** Description shown under the label in the menu. */
    description?: ActionLabel;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    /**
     * Internal route, rendered with `LinkWithLocation` (react-router, like
     * `IconButton`'s `url`): no full page reload, current location kept in
     * router state. Ignored if `render*` is set.
     */
    url?: string;
    /** Force a full document load for `url` (e.g. file downloads). */
    reloadDocument?: boolean;
    replace?: boolean;
    download?: boolean | string;
    target?: string;
    rel?: string;
    disabled?: boolean;
    /** Shortcut for `color: 'error.main'` (text + icon), in menu and inline. */
    danger?: boolean;
    /** Colour of icon (and menu label). Overrides the cell-level `color`. */
    color?: ActionColor;
    /** Per-action icon-button size. Overrides the cell-level `size`. */
    size?: ActionButtonSize;
    /** Per-action icon size. Overrides the cell-level `iconSize`. */
    iconSize?: ActionIconSize;
    /** Nested actions, rendered as a submenu. One level is the norm, recursion is supported. */
    children?: TableAction[];
    /** Escape hatch for dialog/modal triggers etc. Used wherever the action is placed. */
    render?: (context: ActionRenderContext) => ReactNode;
    /** Escape hatch used only when rendered inline. Takes precedence over `render`. */
    renderInline?: (context: ActionRenderContext) => ReactNode;
    /**
     * Escape hatch used only when rendered in the menu. Takes precedence over `render`.
     * Warning: menu children are unmounted when the menu closes. Do NOT hold
     * dialog state in here — hoist the dialog outside `ActionsCell` and open it
     * from a plain `onClick` instead (or pass `keepMenuMounted` to ActionsCell).
     */
    renderMenuItem?: (context: ActionRenderContext) => ReactNode;
    dataTestId?: string;
    sx?: SxProps<Theme>;
};

export type ActionDivider = BaseAction & {
    type: 'divider';
};

export type ActionHeader = BaseAction & {
    type: 'header';
    label: ActionLabel;
};

export type TableAction =
    | ActionItem
    | ActionDivider
    | ActionHeader
    | false
    | null
    | undefined;

export type NormalizedActionItem = Omit<ActionItem, 'children' | 'key'> & {
    type: 'action';
    key: string;
    children?: NormalizedTableAction[];
};

export type NormalizedTableAction =
    | NormalizedActionItem
    | (ActionDivider & { key: string })
    | (ActionHeader & { key: string });

export type PartitionedActions = {
    inline: NormalizedActionItem[];
    menu: NormalizedTableAction[];
};
