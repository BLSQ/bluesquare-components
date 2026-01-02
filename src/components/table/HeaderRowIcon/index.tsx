import React, { FunctionComponent, ComponentType } from 'react';
import { Tooltip } from '@mui/material';
import { useStyles } from './styles';

type Props = {
    title: string;
    IconComponent: ComponentType;
};

export const HeaderRowIcon: FunctionComponent<Props> = ({
    IconComponent,
    title,
}) => {
    const classes: Record<string, string> = useStyles();

    return (
        <div className={classes.root}>
            <Tooltip title={title}>
                <IconComponent />
            </Tooltip>
        </div>
    );
};
