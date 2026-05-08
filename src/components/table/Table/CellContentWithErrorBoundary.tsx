import { Box } from '@mui/material';
import { withStyles } from '@mui/styles';
import React, { ReactNode } from 'react';
import { injectIntl } from '../../../localization/injectIntl';
import { MESSAGES } from './messages';
import { PatchIntlShape } from '../../../types/types';

const styles = theme => ({
    errorContainer: {
        backgroundColor: theme.palette.error.background,
        margin: 0,
        padding: 0,
    },
});

type Props = {
    value?: any;
    intl: PatchIntlShape;
    classes: Record<string, string>;
    children: ReactNode;
};
type State = { hasError: boolean; error?: any };

// Use an errorBoundary so if the value cannot be parsed and crash when rendering
// we still display the raw value
class CellWithErrorBoundary_ extends React.Component<Props, State> {
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
        const {
            value = undefined,
            children,
            classes,
            intl: { formatMessage },
        } = this.props;
        if (this.state.hasError) {
            return (
                <Box
                    className={classes.errorContainer}
                    title={`${this.state.error}`}
                >
                    {formatMessage(MESSAGES.renderError)}:
                    <pre>{`${JSON.stringify(value)}`}</pre>
                </Box>
            );
        }
        return children;
    }
}

export const CellContentWithErrorBoundary = withStyles(styles)(
    injectIntl(CellWithErrorBoundary_),
);
