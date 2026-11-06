import React, { FunctionComponent, MouseEvent } from 'react';
import {
    Divider,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    MenuItem,
} from '@mui/material';

import { useSafeIntl } from '../../../localization/useSafeIntl';
import { LinkWithLocation } from '../../../Routing/LinkWithLocation';
import { ExpandableMenuItem } from './ExpandableMenuItem';
import { labelOf, linkProps, withIconSize } from './helpers';
import { CellEntry } from './types';

export type MenuEntryProps = {
    entry: CellEntry;
    color?: string;
    iconSize?: 'small' | 'medium' | 'large' | 'inherit';
    closeMenu: () => void;
    inset?: boolean;
};

export const MenuEntry: FunctionComponent<MenuEntryProps> = ({
    entry,
    color,
    iconSize,
    closeMenu,
    inset = false,
}) => {
    const { formatMessage } = useSafeIntl();
    if (entry.type === 'divider') {
        return <Divider component="li" />;
    }
    if (entry.type === 'section') {
        return (
            <ListSubheader component="li" disableSticky>
                {labelOf(formatMessage, entry.label)}
            </ListSubheader>
        );
    }
    if (entry.children?.length) {
        return (
            <ExpandableMenuItem entry={entry} color={color} iconSize={iconSize}>
                {entry.children.map(child => (
                    <MenuEntry
                        key={child.key}
                        entry={child}
                        color={color}
                        iconSize={iconSize}
                        closeMenu={closeMenu}
                        inset
                    />
                ))}
            </ExpandableMenuItem>
        );
    }
    const actionColor = entry.color ?? color;
    return (
        <MenuItem
            disabled={entry.disabled}
            dense
            title={labelOf(formatMessage, entry.tooltip) || undefined}
            data-test={`actions-cell-menu-${entry.key}`}
            {...linkProps(entry, LinkWithLocation)}
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
            <ListItemText primary={labelOf(formatMessage, entry.label)} />
        </MenuItem>
    );
};
