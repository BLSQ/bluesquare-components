import React from 'react';
import PropTypes from 'prop-types';
import Add from '@mui/icons-material/Add';
import { Button } from '@mui/material';

import { withStyles } from '@mui/styles';
import { commonStyles } from '../../../styles/iaso/common.ts';
import { useSafeIntl } from '../../../localization/useSafeIntl';
import { MESSAGES } from './messages';

const styles = theme => ({
    ...commonStyles(theme),
});

function AddButtonComponent({
    classes,
    onClick,
    message = MESSAGES.create,
    id = '',
    dataTestId = '',
    size = 'medium',
    disabled = false,
}) {
    const intl = useSafeIntl();
    return (
        <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={onClick}
            id={id}
            data-test={dataTestId}
            size={size}
            disabled={disabled}
        >
            <Add className={classes.buttonIcon} />
            {intl.formatMessage(message)}
        </Button>
    );
}
AddButtonComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    message: PropTypes.object, // TODO: make a message prop type
    id: PropTypes.string,
    dataTestId: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
};

const styledAddButton = withStyles(styles)(AddButtonComponent);
export { styledAddButton as AddButton };
