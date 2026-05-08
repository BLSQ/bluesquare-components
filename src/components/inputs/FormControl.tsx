import React, { FunctionComponent, ReactNode } from 'react';
import FormControl from '@mui/material/FormControl';
import { makeStyles, withStyles } from '@mui/styles';
import { Typography, Box } from '@mui/material';
import classNames from 'classnames';

const defaultErrors: string[] = [];

const useStyles = makeStyles(theme => ({
    formControl: {
        width: '100%',
        '& fieldset': {
            borderWidth: '1px !important',
        },
        '&:hover fieldset': {
            borderColor: `${theme.palette.primary.main}`,
        },
        '&:focused label': {
            color: `${theme.palette.primary.main}`,
        },
        zIndex: 'auto',
    },
    errorContainer: {
        paddingLeft: theme.spacing(1.6),
        paddingTop: theme.spacing(0.5),
    },
    error: {
        color: theme.palette.error.main,
        fontSize: 14,
        padding: 0,
    },
}));

type Props = {
    children: ReactNode;
    errors?: string[];
    id?: string | Record<string, any>;
    hideError?: boolean;
};

const FormControlComponent: FunctionComponent<Props> = ({
    children,
    id,
    errors = defaultErrors,
    hideError = false,
}) => {
    const classes: Record<string, string> = useStyles();
    const extraProps: any = id ? { id } : {};

    return (
        <FormControl
            className={classes.formControl}
            variant="outlined"
            {...extraProps}
        >
            {children}
            {errors.length > 0 && !hideError && (
                <Box
                    className={classNames(
                        classes.errorContainer,
                        'error-container',
                    )}
                >
                    {errors
                        .filter(error => !!error)
                        .map(error => (
                            <Typography
                                variant="caption"
                                key={error}
                                className={classes.error}
                            >
                                {error}
                            </Typography>
                        ))}
                </Box>
            )}
        </FormControl>
    );
};

export { FormControlComponent as FormControl };
