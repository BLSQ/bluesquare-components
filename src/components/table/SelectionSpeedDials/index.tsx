import React, { FunctionComponent } from 'react';
import { ClickAwayListener, SpeedDial, SpeedDialAction } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useStyles } from './styles';

type Props = {
    selection: Record<string, any>;
    actionMessage: string;
    hidden?: boolean;
    actions?: any[];
    reset?: Function;
};

export const SelectionSpeedDials: FunctionComponent<Props> = ({
    hidden = false,
    actions = [],
    selection,
    reset = () => null,
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
