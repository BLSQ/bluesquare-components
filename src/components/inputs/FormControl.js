import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, Box } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
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
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(1),
    },
    error: {
        color: theme.palette.error.main,
        fontSize: 14,
        padding: 0,
    },
});

function FormControlComponent({ classes, children, errors, id, hideError }) {
    const extraProps = {};
    if (id) {
        extraProps.id = id;
    }

    return (
        <FormControl
            className={classes.formControl}
            variant="outlined"
            {...extraProps}
        >
            {children}
            {errors.length > 0 && !hideError && (
                <Box className={classes.errorContainer}>
                    {errors.map(error => (
                        <Typography key={error} className={classes.error}>
                            {error}
                        </Typography>
                    ))}
                </Box>
            )}
        </FormControl>
    );
}
FormControlComponent.defaultProps = {
    errors: [],
    id: null,
    hideError: false,
};
FormControlComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    errors: PropTypes.arrayOf(PropTypes.string.isRequired),
    id: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    hideError: PropTypes.bool,
};
const styledComponent = withStyles(styles)(FormControlComponent);

export { styledComponent as FormControl };
