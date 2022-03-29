import React from 'react';
import PropTypes from 'prop-types';
import Add from '@material-ui/icons/Add';
import { withStyles, Button } from '@material-ui/core';

import { commonStyles } from '../../../styles/iaso/common';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from './messages';

const styles = theme => ({
    ...commonStyles(theme),
});

function AddButtonComponent({ classes, onClick, message, id, dataTestId }) {
    const intl = useSafeIntl();
    const extraProps = {};

    if (dataTestId !== '') {
        extraProps['data-test'] = dataTestId;
    }
    return (
        <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={onClick}
            id={id}
            {...extraProps}
        >
            <Add className={classes.buttonIcon} />
            {intl.formatMessage(message)}
        </Button>
    );
}
AddButtonComponent.defaultProps = {
    message: MESSAGES.create,
    id: '',
    dataTestId: '',
};
AddButtonComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    message: PropTypes.object, // TODO: make a message prop type
    id: PropTypes.string,
    dataTestId: PropTypes.string,
};

const styledAddButton = withStyles(styles)(AddButtonComponent);
export { styledAddButton as AddButton };
