import React, {
    FunctionComponent,
    MouseEvent,
    ReactElement,
    ReactNode,
    cloneElement,
    isValidElement,
    useId,
    useState,
} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
import { ActionLabel, CellAction, CellEntry, TableAction } from './types';
import { partitionActions } from './utils';

const withIconSize = (
    icon: ReactNode,
    iconSize?: 'small' | 'medium' | 'large' | 'inherit',
): ReactNode => {
    if (!iconSize || !isValidElement(icon)) {
        return icon;
    }
    const element = icon as ReactElement<{ fontSize?: string }>;
    return element.props.fontSize
        ? icon
        : cloneElement(element, { fontSize: iconSize });
};

const linkProps = (action: CellAction) => {
    if (!action.href) {
        return {};
    }
    if (action.download) {
        return { component: 'a', href: action.href, download: true };
    }
    return { component: LinkWithLocation, to: action.href };
};

export type ActionsCellProps = {
    actions: readonly TableAction[];
    maxInline?: number;
    size?: 'small' | 'medium' | 'large';
    iconSize?: 'small' | 'medium' | 'large' | 'inherit';
    color?: string;
    disabled?: boolean;
    menuIcon?: ReactNode;
    menuLabel?: ActionLabel;
    sx?: SxProps<Theme>;
};

/** Inline icons up to `maxInline`, the rest behind a ⋮ menu. */
export const ActionsCell: FunctionComponent<ActionsCellProps> = ({
    actions,
    maxInline = 2,
    size = 'small',
    iconSize = 'small',
    color,
    disabled = false,
    menuIcon,
    menuLabel,
    sx,
}) => {
    const { formatMessage } = useSafeIntl();
    const menuId = useId();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const { inline, menu } = partitionActions(actions, maxInline);

    const labelOf = (label?: ActionLabel): string => {
        if (!label) return '';
        return typeof label === 'string'
            ? label
            : formatMessage(label as IntlMessage);
    };

    const closeMenu = () => setAnchorEl(null);
    const stopRowClick = (event: MouseEvent) => event.stopPropagation();

    if (!inline.length && !menu.length) {
        return null;
    }

    const burgerLabel =
        labelOf(menuLabel) || formatMessage(MESSAGES.moreActions);

    return (
        <Box
            sx={[
                {
                    display: 'inline-flex',
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    whiteSpace: 'nowrap',
                },
                ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
            ]}
            data-test="actions-cell"
        >
            {inline.map(action => {
                const actionColor = action.color ?? color;
                const tooltip = labelOf(action.tooltip ?? action.label);
                const button = (
                    <IconButton
                        size={action.size ?? size}
                        disabled={disabled || action.disabled}
                        color="inherit"
                        aria-label={tooltip || action.key}
                        data-test={`actions-cell-inline-${action.key}`}
                        {...linkProps(action)}
                        onClick={(event: MouseEvent<HTMLButtonElement>) => {
                            stopRowClick(event);
                            action.onClick?.(event);
                        }}
                        sx={action.sx}
                    >
                        <Box
                            component="span"
                            sx={{
                                display: 'inline-flex',
                                color: actionColor,
                                '& .MuiSvgIcon-root': { color: 'inherit' },
                            }}
                        >
                            {withIconSize(
                                action.icon,
                                action.iconSize ?? iconSize,
                            )}
                        </Box>
                    </IconButton>
                );
                return (
                    <Tooltip
                        key={action.key}
                        title={tooltip}
                        placement="bottom"
                    >
                        <span>{button}</span>
                    </Tooltip>
                );
            })}
            {menu.length > 0 && (
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
                                    stopRowClick(event);
                                    setAnchorEl(event.currentTarget);
                                }}
                                sx={{ color }}
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
                        onClose={closeMenu}
                        onClick={stopRowClick}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        {menu.map(entry => (
                            <MenuEntry
                                key={entry.key}
                                entry={entry}
                                color={color}
                                iconSize={iconSize}
                                labelOf={labelOf}
                                closeMenu={closeMenu}
                            />
                        ))}
                    </Menu>
                </>
            )}
        </Box>
    );
};

const MenuEntry: FunctionComponent<{
    entry: CellEntry;
    color?: string;
    iconSize?: 'small' | 'medium' | 'large' | 'inherit';
    labelOf: (label?: ActionLabel) => string;
    closeMenu: () => void;
    inset?: boolean;
}> = ({ entry, color, iconSize, labelOf, closeMenu, inset = false }) => {
    if (entry.type === 'divider') {
        return <Divider component="li" />;
    }
    if (entry.type === 'section') {
        return (
            <ListSubheader component="li" disableSticky>
                {labelOf(entry.label)}
            </ListSubheader>
        );
    }
    if (entry.children?.length) {
        return (
            <ExpandableMenuItem
                entry={entry}
                color={color}
                iconSize={iconSize}
                labelOf={labelOf}
                closeMenu={closeMenu}
            />
        );
    }
    const actionColor = entry.color ?? color;
    return (
        <MenuItem
            disabled={entry.disabled}
            dense
            title={labelOf(entry.tooltip) || undefined}
            data-test={`actions-cell-menu-${entry.key}`}
            {...linkProps(entry)}
            onClick={(event: MouseEvent<HTMLElement>) => {
                event.stopPropagation();
                closeMenu();
                entry.onClick?.(event);
            }}
            sx={{
                pl: inset ? 4 : undefined,
                color: actionColor,
                '& .MuiListItemIcon-root': { color: actionColor },
            }}
        >
            {entry.icon && (
                <ListItemIcon>
                    {withIconSize(entry.icon, entry.iconSize ?? iconSize)}
                </ListItemIcon>
            )}
            <ListItemText primary={labelOf(entry.label)} />
        </MenuItem>
    );
};

const ExpandableMenuItem: FunctionComponent<{
    entry: CellAction;
    color?: string;
    iconSize?: 'small' | 'medium' | 'large' | 'inherit';
    labelOf: (label?: ActionLabel) => string;
    closeMenu: () => void;
}> = ({ entry, color, iconSize, labelOf, closeMenu }) => {
    const [expanded, setExpanded] = useState(false);
    const actionColor = entry.color ?? color;
    return (
        <>
            <MenuItem
                disabled={entry.disabled}
                dense
                aria-expanded={expanded}
                data-test={`actions-cell-submenu-${entry.key}`}
                onClick={(event: MouseEvent<HTMLElement>) => {
                    event.stopPropagation();
                    setExpanded(open => !open);
                }}
                sx={{
                    color: actionColor,
                    '& .MuiListItemIcon-root': { color: actionColor },
                }}
            >
                {entry.icon && (
                    <ListItemIcon>
                        {withIconSize(entry.icon, entry.iconSize ?? iconSize)}
                    </ListItemIcon>
                )}
                <ListItemText primary={labelOf(entry.label)} />
                <ExpandMoreIcon
                    fontSize="small"
                    sx={{
                        ml: 2,
                        color: 'action.active',
                        transform: expanded ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s',
                    }}
                />
            </MenuItem>
            {expanded &&
                entry.children?.map(child => (
                    <MenuEntry
                        key={child.key}
                        entry={child}
                        color={color}
                        iconSize={iconSize}
                        labelOf={labelOf}
                        closeMenu={closeMenu}
                        inset
                    />
                ))}
        </>
    );
};
