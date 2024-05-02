/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { IconButton, Tooltip } from '@mui/material';
import { withStyles } from '@mui/styles';
import Delete from '@mui/icons-material/Delete';
import FilterList from '@mui/icons-material/FilterList';
import CallMerge from '@mui/icons-material/CallMerge';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';
import Edit from '@mui/icons-material/Settings';
import History from '@mui/icons-material/History';
import Map from '@mui/icons-material/Map';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import StopRoundedIcon from '@mui/icons-material/StopRounded';
import GetAppIcon from '@mui/icons-material/GetApp';
import RestoreFromTrash from '@mui/icons-material/RestoreFromTrash';
import PublicIcon from '@mui/icons-material/Public';
import ClearIcon from '@mui/icons-material/Clear';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { Link } from 'react-router-dom';
import { XmlSvg } from '../../../svg/XmlSvgComponent';
import { DHIS2Svg } from '../../../svg/DHIS2SvgComponent';
import { OrgUnitSvg } from '../../../svg/OrgUnitSvgComponent';
import { ExcellSvg } from '../../../svg/ExcellSvgComponent';
import { commonStyles } from '../../../styles/iaso/common.ts';

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

const styles = theme => ({
    ...commonStyles(theme),
    white: {
        color: 'white',
    },
    popperFixed: {
        ...commonStyles(theme).popperFixed,
        marginTop: theme.spacing(1),
    },
});

const ButtonIcon = ({ icon: Icon, color, onClick, disabled, fontSize }) => {
    if (Icon === undefined) {
        return 'wrong icon';
    }

    const iconProps = onClick !== null ? { onClick } : {};

    // special override for white color, which is not a "theme" variant such as primary, secondary or action
    const iconStyles = {
        color: color === 'white' ? color : undefined,
        opacity: disabled ? 0.5 : 1,
    };
    // const iconStyles = color === 'white' ? { color: 'white' } : {};

    return (
        <Icon
            {...iconProps}
            color={color === 'white' ? 'inherit' : color}
            style={iconStyles}
            fontSize={fontSize}
        />
    );
};
ButtonIcon.defaultProps = {
    onClick: null,
    disabled: false,
    fontSize: 'medium',
};
ButtonIcon.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    color: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    fontSize: PropTypes.oneOf([
        'small',
        'medium',
        'large',
        'default',
        'inherit',
    ]),
};

function IconButtonComponent({
    classes,
    disabled,
    onClick,
    url,
    icon: iconName,
    overrideIcon,
    tooltipMessage,
    color,
    size,
    id,
    dataTestId,
    iconSize,
    location,
    reloadDocument = false,
    replace = false,
    target = '_self',
}) {
    if ((onClick === null) === (url === null)) {
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
                <IconButton
                    className={url && classes.iconButton}
                    disabled={disabled}
                    onClick={onClick}
                    size={size}
                    data-test={dataTestId}
                >
                    {url ? (
                        // TODO access location directly
                        <Link
                            to={url}
                            className={classes.linkButton}
                            replace={replace}
                            state={
                                location
                                    ? { location: location.pathname }
                                    : undefined
                            }
                            reloadDocument={reloadDocument}
                            target={target}
                        >
                            <ButtonIcon
                                icon={icon}
                                color={color}
                                disabled={disabled}
                                fontSize={iconSize}
                            />
                        </Link>
                    ) : (
                        <ButtonIcon
                            icon={icon}
                            color={color}
                            disabled={disabled}
                            fontSize={iconSize}
                        />
                    )}
                </IconButton>
            </span>
        </Tooltip>
    );
}
IconButtonComponent.defaultProps = {
    disabled: false,
    url: null,
    onClick: null,
    color: 'action',
    size: 'medium',
    overrideIcon: null,
    icon: null,
    id: '',
    dataTestId: '',
    iconSize: 'medium',
    location: undefined,
    reloadDocument: undefined,
    replace: undefined,
    target: undefined,
};
IconButtonComponent.propTypes = {
    size: PropTypes.string,
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    url: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.oneOf(Object.keys(ICON_VARIANTS)),
    color: PropTypes.string,
    overrideIcon: PropTypes.any,
    tooltipMessage: PropTypes.object.isRequired, // TODO: refactor IASO to pass the translation directly
    id: PropTypes.string,
    dataTestId: PropTypes.string,
    iconSize: PropTypes.oneOf([
        'small',
        'medium',
        'large',
        'default',
        'inherit',
    ]),
    location: PropTypes.string,
    reloadDocument: PropTypes.bool,
    replace: PropTypes.bool,
    target: PropTypes.string,
};

const styledIconButton = withStyles(styles)(IconButtonComponent);

export { styledIconButton as IconButton };
