import React, { FunctionComponent } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';

const baseRoot = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    top: 0,
    left: 0,
};

const useStyles = makeStyles({
    rootFixed: {
        ...baseRoot,
        position: 'fixed',
        zIndex: '1000',
    },
    rootAbsolute: {
        ...baseRoot,
        position: 'absolute',
        zIndex: '1000',
    },
    root: {
        ...baseRoot,
        position: 'relative',
        zIndex: '1',
    },
    rootTransparent: {
        backgroundColor: 'transparent',
    },
});

type Props = {
    size?: number; //Adjust the size of the spinner
    transparent?: boolean;
    fixed?: boolean;
    absolute?: boolean;
    padding?: number;
};

export const LoadingSpinner: FunctionComponent<Props> = ({
    size = 40,
    transparent = false,
    fixed = true,
    absolute = false,
    padding = 0,
}) => {
    const classes: Record<string, string> = useStyles();
    return (
        <div
            style={{
                padding,
            }}
            className={classNames(
                fixed && !absolute && classes.rootFixed,
                absolute && classes.rootAbsolute,
                !fixed && !absolute && classes.root,
                transparent && classes.rootTransparent,
            )}
        >
            <CircularProgress size={size} />
        </div>
    );
};
