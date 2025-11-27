/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent, HTMLAttributeAnchorTarget } from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import CallMerge from '@mui/icons-material/CallMerge';
import ClearIcon from '@mui/icons-material/Clear';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Delete from '@mui/icons-material/Delete';
import FilterList from '@mui/icons-material/FilterList';
import GetAppIcon from '@mui/icons-material/GetApp';
import History from '@mui/icons-material/History';
import Map from '@mui/icons-material/Map';
import PublicIcon from '@mui/icons-material/Public';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';
import RestoreFromTrash from '@mui/icons-material/RestoreFromTrash';
import Edit from '@mui/icons-material/Settings';
import StopRoundedIcon from '@mui/icons-material/StopRounded';
import { IconButton as MuiIconButton, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';
import { LinkWithLocation } from '../../../Routing/LinkWithLocation';
import { commonStyles } from '../../../styles/iaso/common';
import { DHIS2Svg } from '../../../svg/DHIS2SvgComponent';
import { ExcellSvg } from '../../../svg/ExcellSvgComponent';
import { OrgUnitSvg } from '../../../svg/OrgUnitSvgComponent';
import { XmlSvg } from '../../../svg/XmlSvgComponent';
import { IntlMessage } from '../../../types/types';

const ICON_VARIANTS = {
    delete: Delete,
    'filter-list': FilterList,
    'call-merge': CallMerge,
    'remove-red-eye': RemoveRedEye,
    'restore-from-trash': RestoreFromTrash,
    edit: Edit,
    history: History,
    map: Map,
    xml: XmlSvg,
    dhis: DHIS2Svg,
    orgUnit: OrgUnitSvg,
    refresh: CachedRoundedIcon,
    stop: StopRoundedIcon,
    xls: ExcellSvg,
    download: GetAppIcon,
    globe: PublicIcon,
    clear: ClearIcon,
    clearAll: ClearAllIcon,
};

const useStyles = makeStyles(theme => ({
    ...commonStyles(theme),
    white: {
        color: 'white',
    },
    popperFixed: {
        ...commonStyles(theme).popperFixed,
        marginTop: theme.spacing(1),
    },
}));

type ButtonIconProps = {
    icon: any;
    color: string;
    disabled?: boolean;
    fontSize?: 'small' | 'medium' | 'large' | 'default' | 'inherit';
};

const ButtonIcon: FunctionComponent<ButtonIconProps> = ({
    icon: Icon,
    color,
    disabled = false,
    fontSize = 'medium',
}) => {
    // special override for white color, which is not a "theme" variant such as primary, secondary or action
    const iconStyles = {
        color: color === 'white' ? color : undefined,
        opacity: disabled ? 0.5 : 1,
    };

    return (
        <Icon
            color={color === 'white' ? 'inherit' : color}
            style={iconStyles}
            fontSize={fontSize}
        />
    );
};

export type IconButtonBuiltInIcon =
    | 'delete'
    | 'filter-list'
    | 'call-merge'
    | 'remove-red-eye'
    | 'restore-from-trash'
    | 'edit'
    | 'history'
    | 'map'
    | 'xml'
    | 'dhis'
    | 'orgUnit'
    | 'refresh'
    | 'stop'
    | 'xls'
    | 'download'
    | 'globe'
    | 'clear'
    | 'clearAll';

type Props = {
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    url?: string;
    disabled?: boolean;
    icon?: IconButtonBuiltInIcon;
    color?: string;
    overrideIcon?: SvgIconComponent;
    tooltipMessage: IntlMessage;
    id?: string;
    dataTestId?: string;
    iconSize?: 'small' | 'medium' | 'large' | 'default' | 'inherit';
    reloadDocument?: boolean;
    replace?: boolean;
    download?: boolean;
    target?: HTMLAttributeAnchorTarget;
};

export const IconButton: FunctionComponent<Props> = ({
    onClick,
    url,
    icon: iconName = '',
    overrideIcon,
    tooltipMessage,
    id,
    dataTestId,
    disabled = false,
    color = 'action',
    size = 'medium',
    iconSize = 'medium',
    reloadDocument = false,
    replace = false,
    target = '_self',
    download = false,
}) => {
    const classes: Record<string, string> = useStyles({});
    if (!onClick && !url) {
        console.error(
            'IconButtonComponent needs either the onClick or the url property',
        );
    }
    if (!iconName && !overrideIcon) {
        console.error('IconButtonComponent has to be provided with an icon');
    }
    const icon = overrideIcon ?? ICON_VARIANTS[iconName];
    // The <span> is needed so the tooltip correctly display when the button is disabled
    return (
        <Tooltip
            classes={{ popper: classes.popperFixed }}
            disableFocusListener={disabled}
            disableHoverListener={disabled}
            disableTouchListener={disabled}
            placement="bottom"
            title={<FormattedMessage {...tooltipMessage} />}
        >
            {/* Wrapping the button in a span to prevent tooltip from crashing as it needs a DOm element to position itself  */}
            <span id={id}>
                <MuiIconButton
                    className={url && classes.iconButton}
                    disabled={disabled}
                    onClick={onClick}
                    size={size}
                    data-test={dataTestId}
                >
                    {url ? (
                        <LinkWithLocation
                            to={url}
                            className={classes.linkButton}
                            replace={replace}
                            reloadDocument={reloadDocument}
                            target={target}
                            download={download}
                        >
                            <ButtonIcon
                                icon={icon}
                                color={color}
                                disabled={disabled}
                                fontSize={iconSize}
                            />
                        </LinkWithLocation>
                    ) : (
                        <ButtonIcon
                            icon={icon}
                            color={color}
                            disabled={disabled}
                            fontSize={iconSize}
                        />
                    )}
                </MuiIconButton>
            </span>
        </Tooltip>
    );
};
