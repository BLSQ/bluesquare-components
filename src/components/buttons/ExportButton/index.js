import React from 'react';
import PropTypes from 'prop-types';
import CallMade from '@material-ui/icons/CallMade';
import { withStyles, Button } from '@material-ui/core';
import { commonStyles } from '../../../styles/iaso/common';
import { injectIntl } from '../../../utils/injectIntl';
import { MESSAGES } from './messages';

const styles = theme => ({
    ...commonStyles(theme),
    button: {
        marginLeft: theme.spacing(2),
        '& svg, & i': {
            marginRight: theme.spacing(1),
        },
    },
});

// TODO refactor to useSafeIntl instead?
function ExportButtonComponent({
    classes,
    intl,
    onClick,
    message,
    isDisabled,
    batchExport,
    id,
}) {
    return batchExport ? (
        <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={onClick}
            disabled={isDisabled}
            id={id}
        >
            <CallMade className={classes.buttonIcon} />
            {intl.formatMessage(message)}
        </Button>
    ) : (
        <CallMade onClick={onClick} disabled={isDisabled} />
    );
}
ExportButtonComponent.defaultProps = {
    message: MESSAGES.export,
    isDisabled: false,
    id: '',
};
ExportButtonComponent.propTypes = {
    intl: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool,
    batchExport: PropTypes.bool.isRequired,
    message: PropTypes.object, // TODO: make a message prop type
    id: PropTypes.string,
};

const styledExportButton = withStyles(styles)(
    injectIntl(ExportButtonComponent),
);

export { styledExportButton as ExportButton };
