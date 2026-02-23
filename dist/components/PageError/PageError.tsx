import React, { FunctionComponent } from 'react';
import ErrorOutline from '@mui/icons-material/ErrorOutline';
import HelpOutline from '@mui/icons-material/HelpOutline';
import NotAuthorized from '@mui/icons-material/NotInterested';
import { Box, Container, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';
import MESSAGES from './messages';

const useStyles = makeStyles({
    icon: {
        fontWeight: 'light',
        fontSize: 150,
    },
});

type Props = {
    errorCode: string;
    iconColor: string; // CSS color value
};

export const PageError: FunctionComponent<Props> = ({
    errorCode,
    iconColor,
}) => {
    const classes = useStyles();
    return (
        <Box mt={5}>
            <Container maxWidth="md">
                <Paper>
                    <Box
                        py={6}
                        px={2}
                        justifyContent="center"
                        alignItems="center"
                        display="flex"
                        flexDirection="column"
                    >
                        <Box pt={3}>
                            <Typography variant="h2" id="error-code">
                                {errorCode}
                            </Typography>
                        </Box>
                        {errorCode === '401' && (
                            <>
                                <Box pt={2} pb={2}>
                                    <Typography variant="h5">
                                        <FormattedMessage
                                            {...MESSAGES.notAuthenticated}
                                        />
                                    </Typography>
                                </Box>
                                <NotAuthorized
                                    className={classes.icon}
                                    style={
                                        iconColor
                                            ? { color: iconColor }
                                            : undefined
                                    }
                                />
                            </>
                        )}
                        {errorCode === '403' && (
                            <>
                                <Box pt={2} pb={2}>
                                    <Typography variant="h5">
                                        <FormattedMessage
                                            {...MESSAGES.unauthorized}
                                        />
                                    </Typography>
                                </Box>
                                <NotAuthorized
                                    className={classes.icon}
                                    style={
                                        iconColor
                                            ? { color: iconColor }
                                            : undefined
                                    }
                                />
                            </>
                        )}
                        {errorCode === '404' && (
                            <>
                                <Box pt={2} pb={2}>
                                    <Typography variant="h5">
                                        <FormattedMessage
                                            {...MESSAGES.notFound}
                                        />
                                    </Typography>
                                </Box>
                                <HelpOutline
                                    className={classes.icon}
                                    style={
                                        iconColor
                                            ? { color: iconColor }
                                            : undefined
                                    }
                                />
                            </>
                        )}
                        {errorCode === '500' && (
                            <>
                                <Box pt={2} pb={2}>
                                    <Typography variant="h5">
                                        <FormattedMessage
                                            {...MESSAGES.labelError}
                                        />
                                    </Typography>
                                </Box>
                                <ErrorOutline
                                    className={classes.icon}
                                    style={
                                        iconColor
                                            ? { color: iconColor }
                                            : undefined
                                    }
                                />
                            </>
                        )}
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};
