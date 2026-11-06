import React, {
    FunctionComponent,
    MouseEvent,
    ReactNode,
    useState,
} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';

import { useSafeIntl } from '../../../localization/useSafeIntl';
import { labelOf, withIconSize } from './helpers';
import { CellAction } from './types';

export type ExpandableMenuItemProps = {
    entry: CellAction;
    color?: string;
    iconSize?: 'small' | 'medium' | 'large' | 'inherit';
    children?: ReactNode;
};

export const ExpandableMenuItem: FunctionComponent<ExpandableMenuItemProps> = ({
    entry,
    color,
    iconSize,
    children,
}) => {
    const { formatMessage } = useSafeIntl();
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
                <ListItemText primary={labelOf(formatMessage, entry.label)} />
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
            {expanded && children}
        </>
    );
};
