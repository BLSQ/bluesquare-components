import React, {
    FunctionComponent,
    ReactChildren,
    ReactNode,
    useState,
} from 'react';
import { Collapse, ListItem, ListItemText, Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

type Props = {
    openOnMount?: boolean;
    children: ReactChildren | ReactNode;
    label: string;
    preventCollapse?: boolean;
    titleColor?:
        | 'initial'
        | 'primary'
        | 'secondary'
        | 'inherit'
        | 'textPrimary'
        | 'textSecondary'
        | 'error'
        | undefined;
    titleVariant?:
        | 'body1'
        | 'body2'
        | 'button'
        | 'caption'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'inherit'
        | 'overline'
        | 'subtitle1'
        | 'subtitle2'
        | string;
    backgroundColor?: string;
};

export const ExpandableItem: FunctionComponent<Props> = ({
    openOnMount = false,
    children,
    label,
    preventCollapse = false,
    titleVariant = 'body1',
    titleColor = 'initial',
    backgroundColor = 'transparent',
}) => {
    const [open, setOpen] = useState<boolean>(openOnMount);
    return (
        <>
            <ListItem
                style={{ backgroundColor }}
                button
                onClick={() => {
                    setOpen(value => !value);
                }}
                disableRipple={preventCollapse}
            >
                <ListItemText>
                    {/* @ts-ignore */}
                    <Typography variant={titleVariant} color={titleColor}>
                        {label}
                    </Typography>
                </ListItemText>
                {(open || preventCollapse) && <ExpandLess />}
                {!open && !preventCollapse && <ExpandMore />}
            </ListItem>
            <Collapse in={open || preventCollapse} timeout="auto" unmountOnExit>
                {/* @ts-ignore */}
                {children}
            </Collapse>
        </>
    );
};
