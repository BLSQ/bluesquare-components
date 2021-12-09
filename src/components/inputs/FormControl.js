import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    formControl: {
        width: '100%',
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
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
    formControlWithMarginTop: {
        marginTop: theme.spacing(2),
    },
    error: {
        color: theme.palette.error.main,
    },
    marginTopZero: {
        marginTop: 0,
    },
});

function FormControlComponent({
    classes,
    children,
    withMarginTop,
    errors,
    marginTopZero,
}) {
    const classNames = [classes.formControl];
    // FIXME the logic seems to inverted here, but changing it leads to lots of visual bugs in Iaso
    if (!withMarginTop) {
        classNames.push(classes.formControlWithMarginTop);
    }

    // placing marginTopZero here to make sure it overides whatever margin was given by withMarginTop
    if (marginTopZero) {
        classNames.push(classes.marginTopZero);
    }

    return (
        <FormControl className={classNames.join(' ')} variant="outlined">
            {children}
            {errors.length > 0 &&
                errors.map(error => (
                    <Typography key={error} className={classes.error}>
                        {error}
                    </Typography>
                ))}
        </FormControl>
    );
}
FormControlComponent.defaultProps = {
    withMarginTop: true,
    marginTopZero: false,
    errors: [],
};
FormControlComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    withMarginTop: PropTypes.bool, // FIXME: these 2 props are redundant, but changing withMarginTop breaks alignment in Iaso
    marginTopZero: PropTypes.bool,
    errors: PropTypes.arrayOf(PropTypes.string.isRequired),
};
const styledComponent = withStyles(styles)(FormControlComponent);

export { styledComponent as FormControl };
