import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useSafeIntl } from '../../../localization/useSafeIntl';
import { MESSAGES } from './messages';

const Expander = ({ isExpanded, setIsExpanded }) => {
    const { formatMessage } = useSafeIntl();
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
