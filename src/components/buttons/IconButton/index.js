import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withStyles, IconButton, Tooltip } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import FilterList from '@material-ui/icons/FilterList';
import CallMerge from '@material-ui/icons/CallMerge';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import Edit from '@material-ui/icons/Edit';
import History from '@material-ui/icons/History';
import Map from '@material-ui/icons/Map';
import CachedRoundedIcon from '@material-ui/icons/CachedRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import GetAppIcon from '@material-ui/icons/GetApp';
import RestoreFromTrash from '@material-ui/icons/RestoreFromTrash';
import PublicIcon from '@material-ui/icons/Public';
import ClearIcon from '@material-ui/icons/Clear';
import ClearAllIcon from '@material-ui/icons/ClearAll';

import { XmlSvg } from '../../../svg/XmlSvgComponent';
import { DHIS2Svg } from '../../../svg/DHIS2SvgComponent';
import { OrgUnitSvg } from '../../../svg/OrgUnitSvgComponent';
import { ExcellSvg } from '../../../svg/ExcellSvgComponent';

import { commonStyles } from '../../../styles/iaso/common';
import { useLink } from '../../LinkProvider';

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

const ButtonIcon = ({ icon: Icon, color, onClick }) => {
    if (Icon === undefined) {
        return 'wrong icon';
    }

    const iconProps = onClick !== null ? { onClick } : {};

    // special override for white color, which is not a "theme" variant such as primary, secondary or action
    const iconStyles = color === 'white' ? { color: 'white' } : {};

    return (
        <Icon
            {...iconProps}
            color={color === 'white' ? 'inherit' : color}
            style={iconStyles}
        />
    );
};
ButtonIcon.defaultProps = {
    onClick: null,
};
ButtonIcon.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    color: PropTypes.string.isRequired,
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
}) {
    if ((onClick === null) === (url === null)) {
        console.error(
            'IconButtonComponent needs either the onClick or the url property',
        );
    }
    if (!iconName && !overrideIcon) {
        console.error('IconButtonComponent has to be provided with an icon');
    }
    const Link = useLink();
    const icon = overrideIcon ?? ICON_VARIANTS[iconName];
    console.log('icon', overrideIcon, icon);
    // FIXME Why the <span>????
    return (
        <Tooltip
            classes={{ popper: classes.popperFixed }}
            disableFocusListener={disabled}
            disableHoverListener={disabled}
            disableTouchListener={disabled}
            placement="bottom"
            title={<FormattedMessage {...tooltipMessage} />}
        >
            <span>
                <IconButton disabled={disabled} onClick={onClick} size={size}>
                    {url ? (
                        <Link to={url} className={classes.linkButton}>
                            <ButtonIcon icon={icon} color={color} />
                        </Link>
                    ) : (
                        <ButtonIcon icon={icon} color={color} />
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
};

const styledIconButton = withStyles(styles)(IconButtonComponent);

export { styledIconButton as IconButton };
