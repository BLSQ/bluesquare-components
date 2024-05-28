import React, { FunctionComponent } from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { IntlMessage } from '../types/types';
import {
    IconButton,
    IconButtonBuiltInIcon,
} from '../components/buttons/IconButton';

type Props = {
    url: string;
    tooltipMessage: IntlMessage;
    icon?: IconButtonBuiltInIcon;
    overrideIcon?: SvgIconComponent;
};
export const ExternalLinkIconButton: FunctionComponent<Props> = ({
    tooltipMessage,
    url,
    icon,
    overrideIcon,
}) => (
    <a href={url}>
        <IconButton
            tooltipMessage={tooltipMessage}
            onClick={() => null}
            icon={icon}
            overrideIcon={overrideIcon}
        />
    </a>
);
