import { Box, withStyles } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const styles = theme => ({
    errorContainer: {
        backgroundColor: theme.palette.error.background,
        margin: 0,
        padding: 0,
    },
});
// Use an errorBoundary so if the value cannot be parsed and crash when rendering
// we still display the raw value
class CellWithErrorBoundary_ extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.error(error);
        return { hasError: true, error };
    }

    render() {
        const { fieldKey, value, children, classes } = this.props;
        if (this.state.hasError) {
            return (
                <Box
                    className={classes.errorContainer}
                    title={`${this.state.error}`}
                >
                    Error rendering value:
                    <pre>{`${JSON.stringify(value)}`}</pre>
                </Box>
            );
        }
        return children;
    }
}

CellWithErrorBoundary_.defaultProps = {
    value: undefined,
};
CellWithErrorBoundary_.propTypes = {
    value: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
    fieldKey: PropTypes.string.isRequired,
    intl: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};

export const CellContentWithErrorBoundary = withStyles(styles)(
    CellWithErrorBoundary_,
);