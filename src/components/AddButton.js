import React from 'react';
import PropTypes from 'prop-types';
import Add from '@material-ui/icons/Add';
import { withStyles, Button } from '@material-ui/core';

import { commonStyles } from './styles/iaso/common';
import { useSafeIntl } from './utils/useSafeIntl';

const defaultMessage = {
    id: 'iaso.label.create',
    defaultMessage: 'Create',
};

const styles = theme => ({
    ...commonStyles(theme),
});

function AddButtonComponent({ classes, onClick, message }) {
    const intl = useSafeIntl();
    return (
        <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={onClick}
        >
            <Add className={classes.buttonIcon} />
            {intl.formatMessage(message)}
        </Button>
    );
}
AddButtonComponent.defaultProps = {
    message: defaultMessage,
};
AddButtonComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    message: PropTypes.object, // TODO: make a message prop type
};

const styledAddButton = withStyles(styles)(AddButtonComponent);
export { styledAddButton as AddButton };
