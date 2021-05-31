import React from 'react';
import PropTypes from 'prop-types';
import { ClickAwayListener } from '@material-ui/core';
import { SpeedDial, SpeedDialAction } from '@material-ui/lab';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { useStyles } from './styles';

const SelectionSpeedDials = ({
    hidden,
    actions,
    selection,
    reset,
    actionMessage,
}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const activeAction = actions.filter(a => !a.disabled);
    return (
        <ClickAwayListener onClickAway={() => handleClose()}>
            <SpeedDial
                ariaLabel={actionMessage}
                className={classes.speedDial}
                hidden={hidden}
                icon={<CheckBoxIcon />}
                onOpen={handleOpen}
                open={open}
                direction="up"
                actionMessage={actionMessage}
            >
                {activeAction.map(action => (
                    <SpeedDialAction
                        key={action.label}
                        icon={
                            typeof action.icon === 'function'
                                ? action.icon(selection, reset)
                                : action.icon
                        }
                        tooltipTitle={action.label}
                        onClick={() =>
                            action.onClick
                                ? action.onClick(selection)
                                : () => null
                        }
                    />
                ))}
            </SpeedDial>
        </ClickAwayListener>
    );
};

SelectionSpeedDials.defaultProps = {
    hidden: false,
    actions: [],
    reset: () => null,
};

SelectionSpeedDials.propTypes = {
    hidden: PropTypes.bool,
    actions: PropTypes.array,
    selection: PropTypes.object.isRequired,
    reset: PropTypes.func,
    actionMessage: PropTypes.string.isRequired,
};

export { SelectionSpeedDials };
