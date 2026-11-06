import React, {
    FunctionComponent,
    MouseEvent,
    ReactNode,
    useId,
    useState,
} from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, Menu, SxProps, Theme, Tooltip } from '@mui/material';

import { useSafeIntl } from '../../../localization/useSafeIntl';
import { LinkWithLocation } from '../../../Routing/LinkWithLocation';
import { labelOf, linkProps, withIconSize } from './helpers';
import { MenuEntry } from './MenuEntry';
import { MESSAGES } from './messages';
import { ActionLabel, TableAction } from './types';
import { partitionActions } from './utils';

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

    const closeMenu = () => setAnchorEl(null);
    const stopRowClick = (event: MouseEvent) => event.stopPropagation();

    if (!inline.length && !menu.length) {
        return null;
    }

    const burgerLabel =
        labelOf(formatMessage, menuLabel) ||
        formatMessage(MESSAGES.moreActions);

    return (
        <Box
            sx={[
                {
                    display: 'inline-flex',
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    whiteSpace: 'nowrap',
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
            data-test="actions-cell"
        >
            {inline.map(action => {
                const actionColor = action.color ?? color;
                const tooltip = labelOf(
                    formatMessage,
                    action.tooltip ?? action.label,
                );
                const button = (
                    <IconButton
                        size={action.size ?? size}
                        disabled={disabled || action.disabled}
                        color="inherit"
                        aria-label={tooltip || action.key}
                        data-test={`actions-cell-inline-${action.key}`}
                        {...linkProps(action, LinkWithLocation)}
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
                                closeMenu={closeMenu}
                            />
                        ))}
                    </Menu>
                </>
            )}
        </Box>
    );
};
