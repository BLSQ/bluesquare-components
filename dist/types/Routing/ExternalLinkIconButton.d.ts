import { FunctionComponent } from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { IntlMessage } from '../types/types';
import { IconButtonBuiltInIcon } from '../components/buttons/IconButton';
type Props = {
    url: string;
    tooltipMessage: IntlMessage;
    icon?: IconButtonBuiltInIcon;
    overrideIcon?: SvgIconComponent;
};
export declare const ExternalLinkIconButton: FunctionComponent<Props>;
export {};
