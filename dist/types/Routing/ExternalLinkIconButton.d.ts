import { FunctionComponent } from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { IconButtonBuiltInIcon } from '../components/buttons/IconButton';
import { IntlMessage } from '../types/types';
type Props = {
    url: string;
    tooltipMessage: IntlMessage;
    icon?: IconButtonBuiltInIcon;
    overrideIcon?: SvgIconComponent;
};
export declare const ExternalLinkIconButton: FunctionComponent<Props>;
export {};
