import React, { FunctionComponent, SetStateAction } from 'react';
import { Tooltip, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useSafeIntl } from '../../../localization/useSafeIntl';
import { MESSAGES } from './messages';

type Props = {
    isExpanded?: boolean;
    setIsExpanded?: React.Dispatch<SetStateAction<boolean>>;
};

export const Expander: FunctionComponent<Props> = ({
    isExpanded = false,
    setIsExpanded = () => null,
}) => {
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
