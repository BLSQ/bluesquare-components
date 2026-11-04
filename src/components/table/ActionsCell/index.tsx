import React, {
    FunctionComponent,
    MouseEvent,
    ReactElement,
    ReactNode,
    cloneElement,
    isValidElement,
    useCallback,
    useId,
    useMemo,
    useState,
} from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    Box,
    Divider,
    IconButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Menu,
    MenuItem,
    SxProps,
    Theme,
    Tooltip,
} from '@mui/material';

import { useSafeIntl } from '../../../localization/useSafeIntl';
import { LinkWithLocation } from '../../../Routing/LinkWithLocation';
import { IntlMessage } from '../../../types/types';
import { MESSAGES } from './messages';
import {
    ActionColor,
    ActionIconSize,
    ActionLabel,
    NormalizedActionItem,
    NormalizedTableAction,
    TableAction,
} from './types';
import { partitionActions } from './utils';

const styles: Record<string, SxProps<Theme>> = {
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexWrap: 'nowrap',
        whiteSpace: 'nowrap',
    },
    iconWrapper: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiSvgIcon-root': { color: 'inherit' },
    },
    danger: {
        color: 'error.main',
        '& .MuiListItemIcon-root': { color: 'error.main' },
    },
    submenuPaper: { minWidth: 180 },
};

const resolveColor = (
    action: NormalizedActionItem,
    defaultColor?: ActionColor,
): ActionColor | undefined =>
    action.danger ? 'error.main' : (action.color ?? defaultColor);

const withIconSize = (
    icon: ReactNode,
    iconSize?: ActionIconSize,
): ReactNode => {
    if (!iconSize || !isValidElement(icon)) {
        return icon;
    }
    const element = icon as ReactElement<{ fontSize?: string }>;
    return element.props.fontSize
        ? icon
        : cloneElement(element, { fontSize: iconSize });
};

const mergeSx = (...parts: (SxProps<Theme> | undefined)[]): SxProps<Theme> =>
    parts.filter(Boolean) as SxProps<Theme>;

type MenuEntryProps = {
    entry: NormalizedTableAction;
    dense?: boolean;
    defaultColor?: ActionColor;
    defaultIconSize?: ActionIconSize;
    closeMenu: () => void;
    renderLabel: (label?: ActionLabel) => string;
    stopPropagation?: boolean;
};

const SubMenuItem: FunctionComponent<
    MenuEntryProps & { entry: NormalizedActionItem }
> = ({
    entry: action,
    dense,
    defaultColor,
    defaultIconSize,
    closeMenu,
    renderLabel,
    stopPropagation,
}) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const color = resolveColor(action, defaultColor);
    const closeAll = useCallback(() => {
        setAnchorEl(null);
        closeMenu();
    }, [closeMenu]);

    return (
        <>
            <MenuItem
                disabled={action.disabled}
                dense={dense}
                aria-haspopup="menu"
                aria-expanded={open}
                data-test={
                    action.dataTestId ?? `actions-cell-submenu-${action.key}`
                }
                onClick={(event: MouseEvent<HTMLElement>) => {
                    if (stopPropagation) event.stopPropagation();
                    setAnchorEl(event.currentTarget);
                }}
                sx={mergeSx(
                    color
                        ? { color, '& .MuiListItemIcon-root': { color } }
                        : undefined,
                    action.sx,
                )}
            >
                {action.icon && (
                    <ListItemIcon sx={color ? { color } : undefined}>
                        {withIconSize(
                            action.icon,
                            action.iconSize ?? defaultIconSize,
                        )}
                    </ListItemIcon>
                )}
                <ListItemText
                    primary={renderLabel(action.label)}
                    secondary={renderLabel(action.description) || undefined}
                />
                <ChevronRightIcon
                    fontSize="small"
                    sx={{ ml: 2, color: 'action.active' }}
                />
            </MenuItem>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                sx={{ pointerEvents: 'none' }}
                slotProps={{
                    paper: {
                        sx: mergeSx(styles.submenuPaper),
                        style: { pointerEvents: 'auto' },
                    },
                }}
            >
                {(action.children ?? []).map(child => (
                    <MenuEntry
                        key={child.key}
                        entry={child}
                        dense={dense}
                        defaultColor={defaultColor}
                        defaultIconSize={defaultIconSize}
                        closeMenu={closeAll}
                        renderLabel={renderLabel}
                        stopPropagation={stopPropagation}
                    />
                ))}
            </Menu>
        </>
    );
};

const MenuEntry: FunctionComponent<MenuEntryProps> = props => {
    const {
        entry,
        dense,
        defaultColor,
        defaultIconSize,
        closeMenu,
        renderLabel,
        stopPropagation,
    } = props;
    if (entry.type === 'divider') {
        return <Divider component="li" />;
    }
    if (entry.type === 'header') {
        return (
            <ListSubheader component="li" disableSticky>
                {renderLabel(entry.label)}
            </ListSubheader>
        );
    }
    const custom = entry.renderMenuItem ?? entry.render;
    if (custom) {
        return <>{custom({ action: entry, closeMenu, inMenu: true })}</>;
    }
    if (entry.children?.length) {
        return <SubMenuItem {...props} entry={entry} />;
    }
    const color = resolveColor(entry, defaultColor);
    return (
        <MenuItem
            disabled={entry.disabled}
            dense={dense}
            data-test={entry.dataTestId ?? `actions-cell-menu-${entry.key}`}
            {...(entry.url
                ? {
                      component: LinkWithLocation,
                      to: entry.url,
                      reloadDocument: entry.reloadDocument,
                      replace: entry.replace,
                      download: entry.download,
                      target: entry.target,
                      rel:
                          entry.rel ??
                          (entry.target === '_blank'
                              ? 'noopener noreferrer'
                              : undefined),
                  }
                : { component: 'li' })}
            onClick={(event: MouseEvent<HTMLElement>) => {
                if (stopPropagation) event.stopPropagation();
                closeMenu();
                entry.onClick?.(event);
            }}
            sx={mergeSx(
                entry.danger ? styles.danger : undefined,
                color && !entry.danger
                    ? { color, '& .MuiListItemIcon-root': { color } }
                    : undefined,
                entry.sx,
            )}
        >
            {entry.icon && (
                <ListItemIcon sx={color ? { color } : undefined}>
                    {withIconSize(
                        entry.icon,
                        entry.iconSize ?? defaultIconSize,
                    )}
                </ListItemIcon>
            )}
            <ListItemText
                primary={renderLabel(entry.label)}
                secondary={renderLabel(entry.description) || undefined}
            />
        </MenuItem>
    );
};

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
export const ActionsCell: FunctionComponent<ActionsCellProps> = ({
    actions,
    maxInline = 2,
    size = 'small',
    iconSize = 'small',
    color: defaultColor,
    disabled = false,
    hideMenu = false,
    menuIcon,
    menuLabel,
    denseMenu = true,
    keepMenuMounted = false,
    menuMinWidth = 220,
    menuMaxHeight,
    stopPropagation = true,
    onMenuOpen,
    onMenuClose,
    dataTestId = 'actions-cell',
    sx,
    menuSx,
}) => {
    const { formatMessage } = useSafeIntl();
    const menuId = useId();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const { inline, menu } = useMemo(
        () => partitionActions(actions, maxInline),
        [actions, maxInline],
    );

    const renderLabel = useCallback(
        (label?: ActionLabel): string => {
            if (!label) return '';
            return typeof label === 'string'
                ? label
                : formatMessage(label as IntlMessage);
        },
        [formatMessage],
    );

    const closeMenu = useCallback(() => {
        setAnchorEl(null);
        onMenuClose?.();
    }, [onMenuClose]);

    const guard = useCallback(
        (event: MouseEvent<HTMLElement>): void => {
            if (stopPropagation) event.stopPropagation();
        },
        [stopPropagation],
    );

    if (!inline.length && !menu.length) {
        return null;
    }

    const showMenu = !hideMenu && menu.length > 0;
    const burgerLabel =
        renderLabel(menuLabel) || formatMessage(MESSAGES.moreActions);

    return (
        <Box sx={mergeSx(styles.root, sx)} data-test={dataTestId}>
            {inline.map(action => {
                const custom = action.renderInline ?? action.render;
                if (custom) {
                    return (
                        <React.Fragment key={action.key}>
                            {custom({
                                action,
                                closeMenu: () => undefined,
                                inMenu: false,
                            })}
                        </React.Fragment>
                    );
                }
                const actionColor = resolveColor(action, defaultColor);
                const tooltip = renderLabel(action.tooltip ?? action.label);
                const button = (
                    <IconButton
                        size={action.size ?? size}
                        disabled={disabled || action.disabled}
                        color="inherit"
                        aria-label={tooltip || action.key}
                        data-test={
                            action.dataTestId ??
                            `actions-cell-inline-${action.key}`
                        }
                        {...(action.url
                            ? {
                                  component: LinkWithLocation,
                                  to: action.url,
                                  reloadDocument: action.reloadDocument,
                                  replace: action.replace,
                                  download: action.download,
                                  target: action.target,
                                  rel:
                                      action.rel ??
                                      (action.target === '_blank'
                                          ? 'noopener noreferrer'
                                          : undefined),
                              }
                            : {})}
                        onClick={(event: MouseEvent<HTMLButtonElement>) => {
                            guard(event);
                            action.onClick?.(event);
                        }}
                        sx={action.sx}
                    >
                        <Box
                            component="span"
                            sx={{
                                ...styles.iconWrapper,
                                color: actionColor,
                            }}
                        >
                            {withIconSize(
                                action.icon,
                                action.iconSize ?? iconSize,
                            )}
                        </Box>
                    </IconButton>
                );
                // Span wrapper so the tooltip still shows on a disabled button.
                return tooltip ? (
                    <Tooltip
                        key={action.key}
                        title={tooltip}
                        placement="bottom"
                    >
                        <span>{button}</span>
                    </Tooltip>
                ) : (
                    <React.Fragment key={action.key}>{button}</React.Fragment>
                );
            })}
            {showMenu && (
                <>
                    <Tooltip title={burgerLabel} placement="bottom">
                        <span>
                            <IconButton
                                size={size}
                                disabled={disabled}
                                color="inherit"
                                aria-label={burgerLabel}
                                aria-haspopup="menu"
                                aria-expanded={open}
                                aria-controls={open ? menuId : undefined}
                                data-test="actions-cell-menu-button"
                                onClick={(
                                    event: MouseEvent<HTMLButtonElement>,
                                ) => {
                                    guard(event);
                                    setAnchorEl(event.currentTarget);
                                    onMenuOpen?.();
                                }}
                                sx={{ color: defaultColor }}
                            >
                                {menuIcon ?? (
                                    <MoreVertIcon fontSize={iconSize} />
                                )}
                            </IconButton>
                        </span>
                    </Tooltip>
                    <Menu
                        id={menuId}
                        anchorEl={anchorEl}
                        open={open}
                        keepMounted={keepMenuMounted}
                        onClose={closeMenu}
                        onClick={guard}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        slotProps={{
                            paper: {
                                sx: mergeSx(
                                    {
                                        minWidth: menuMinWidth,
                                        maxHeight: menuMaxHeight,
                                    },
                                    menuSx,
                                ),
                            },
                        }}
                    >
                        {menu.map(entry => (
                            <MenuEntry
                                key={entry.key}
                                entry={entry}
                                dense={denseMenu}
                                defaultColor={defaultColor}
                                defaultIconSize={iconSize}
                                closeMenu={closeMenu}
                                renderLabel={renderLabel}
                                stopPropagation={stopPropagation}
                            />
                        ))}
                    </Menu>
                </>
            )}
        </Box>
    );
};
