import { FunctionComponent, ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material';
import { ActionColor, ActionIconSize, ActionLabel, TableAction } from './types';
export type ActionsCellProps = {
    actions: readonly TableAction[];
    /** Max icons shown inline before the rest spills into the burger menu. Default: 2. */
    maxInline?: number;
    /** Icon-button size for inline icons and the burger. Default: 'small' (table density). */
    size?: 'small' | 'medium' | 'large';
    /** Icon size for inline and menu icons. Default: 'small'. */
    iconSize?: ActionIconSize;
    /** Default colour for every icon/label unless overridden per action. Theme path or CSS colour. */
    color?: ActionColor;
    /** Disable the whole cell. */
    disabled?: boolean;
    /** Hide the burger button even if there are menu actions (not recommended). */
    hideMenu?: boolean;
    /** Custom burger icon. Default: vertical ellipsis (⋮). */
    menuIcon?: ReactNode;
    /** Burger tooltip / aria-label. Default: "More actions". */
    menuLabel?: ActionLabel;
    denseMenu?: boolean;
    /**
     * Keep menu children mounted after the menu closes. Only needed when a
     * `renderMenuItem` holds state (e.g. a dialog trigger) that must survive
     * the menu closing. Prefer hoisting dialogs outside the cell instead:
     * mounted menus in every table row have a rendering cost.
     */
    keepMenuMounted?: boolean;
    menuMinWidth?: number;
    menuMaxHeight?: number;
    /** Stop clicks from bubbling to a clickable table row. Default: true. */
    stopPropagation?: boolean;
    onMenuOpen?: () => void;
    onMenuClose?: () => void;
    dataTestId?: string;
    sx?: SxProps<Theme>;
    menuSx?: SxProps<Theme>;
};
/**
 * Reusable table-cell actions: up to `maxInline` icons inline, the rest behind
 * a burger (⋮) menu. Menu entries support icons, colours (incl. `danger`),
 * descriptions, dividers, section headers, nested submenus, links, disabled
 * states and full custom rendering (dialog/modal triggers).
 *
 * ```tsx
 * <ActionsCell
 *   maxInline={2}
 *   actions={[
 *     { key: 'edit', label: MESSAGES.edit, icon: <SettingsIcon />, url: '/…' },
 *     { key: 'instances', label: MESSAGES.viewInstances, icon: <ListIcon />, onClick: … },
 *     { key: 'create', label: 'Create submission', icon: <AddIcon />, placement: 'menu', renderMenuItem: … },
 *     { key: 'download', label: 'Download', icon: <DownloadIcon />, children: [
 *         { key: 'xls', label: 'Excel (XLS)', icon: <TableChartIcon />, url: xlsUrl, download: true, reloadDocument: true },
 *         { key: 'xml', label: 'XML', icon: <CodeIcon />, url: xmlUrl, download: true, reloadDocument: true },
 *     ]},
 *     { type: 'divider' },
 *     { key: 'delete', label: 'Delete', icon: <DeleteIcon />, danger: true, renderMenuItem: … },
 *   ]}
 * />
 * ```
 * Falsy / `hidden` / non-renderable entries are dropped, and orphan or doubled
 * dividers and empty section headers are cleaned up automatically.
 */
export declare const ActionsCell: FunctionComponent<ActionsCellProps>;
