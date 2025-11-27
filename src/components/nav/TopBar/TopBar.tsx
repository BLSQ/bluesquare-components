import { Grid, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React, { ComponentClass, FunctionComponent, ReactNode } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import { usePageTitle } from '../usePageTitle';
import { useSidebar } from '../../../contexts/SideBarContext/SideBarContext';

export const styles = theme => ({
    menuButton: {
        [theme.breakpoints.up('md')]: {
            marginRight: `${theme.spacing(2)} !important`,
            marginLeft: `${theme.spacing(1)} !important`,
        },
    },
    version: {
        fontSize: 9,
        display: 'block',
        marginTop: 5,
    },

    root: {
        '&.MuiToolbar-gutters': {
            paddingRight: '48px',
        },
    },
    logoutButton: {
        padding: theme.spacing(0),
    },
});

export const useStyles = makeStyles(styles);

export type Props = {
    title?: string;
    appTitle?: string;
    children?: ReactNode;
    rightEndComponent?: FunctionComponent | ComponentClass;
    displayBackButton?: boolean;
    goBack?: () => void;
    displayMenuButton?: boolean;
    disableShadow?: boolean;
};

export const TopBar: FunctionComponent<Props> = ({
    children,
    rightEndComponent: RightEndComponent,
    title = '',
    appTitle = '',
    displayBackButton = false,
    goBack = () => null,
    displayMenuButton = true,
    disableShadow = false,
}) => {
    const classes = useStyles();
    const { toggleSidebar } = useSidebar();

    usePageTitle(title, appTitle);

    return (
        <AppBar
            position="relative"
            color="primary"
            id="top-bar"
            sx={{ zIndex: 10 }}
            elevation={disableShadow ? 0 : 4}
        >
            <Toolbar className={classes.root}>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    direction="row"
                >
                    <Grid
                        container
                        item
                        direction="row"
                        xs={7}
                        alignItems="center"
                    >
                        {!displayBackButton && displayMenuButton && (
                            <IconButton
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="Menu"
                                onClick={toggleSidebar}
                                id="menu-button"
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                        {displayBackButton && (
                            <IconButton
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="Back"
                                onClick={goBack}
                                id="top-bar-back-button"
                            >
                                <ArrowBackIcon />
                            </IconButton>
                        )}
                        <Typography
                            variant="h6"
                            color="inherit"
                            id="top-bar-title"
                        >
                            {title}
                        </Typography>
                    </Grid>
                    {/* TODO make this configurable, like input adornments */}
                    {RightEndComponent && (
                        <Grid container item xs={5} justifyContent="flex-end">
                            <RightEndComponent />
                        </Grid>
                    )}
                </Grid>
            </Toolbar>
            {children}
        </AppBar>
    );
};
