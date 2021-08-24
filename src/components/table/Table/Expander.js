import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from './messages';

const Expander = ({ isExpanded, setIsExpanded }) => {
    const intl = useSafeIntl();
    const { formatMessage } = intl;
    return isExpanded ? (
        <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            <VisibilityOff />
        </IconButton>
    ) : (
        <Tooltip title={formatMessage(MESSAGES.details)}>
            <IconButton onClick={() => setIsExpanded(!isExpanded)}>
                <Visibility />
            </IconButton>
        </Tooltip>
    );
};
Expander.defaultProps = {
    isExpanded: false,
    setIsExpanded: () => null,
};

Expander.propTypes = {
    isExpanded: PropTypes.bool,
    setIsExpanded: PropTypes.func,
};

export { Expander };
