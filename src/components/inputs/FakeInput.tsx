import React, { FunctionComponent } from 'react';
import { defineMessages } from 'react-intl';

import { Box, makeStyles, Typography, InputLabel } from '@material-ui/core';
import { FormControl } from './FormControl';

import { IconButton as IconButtonComponent } from '../buttons/IconButton';

type Props = {
    value: string;
    onClick: () => void;
    dataTestId?: string;
    errors?: string[];
    required?: boolean;
    label: string;
    onClear: () => void;
};

const MESSAGES = defineMessages({
    clear: {
        id: 'blsq.treeview.search.options.label.clear',
        defaultMessage: 'clear',
    },
});

const useStyles = makeStyles(theme => ({
    input: {
        display: 'flex',
        alignItems: 'center',
        // @ts-ignore
        border: `1px solid ${theme.palette.border.main}`,
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        minHeight: 54,
        cursor: 'pointer',
        '&:hover': {
            // @ts-ignore
            borderColor: theme.palette.border.hover,
        },
    },
    value: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '92%',
    },
    inputLabel: {
        backgroundColor: 'white',
        // @ts-ignore
        color: theme.palette.mediumGray.main,
    },
    clear: {
        position: 'absolute',
        right: theme.spacing(2),
        top: theme.spacing(1.5),
    },
}));

export const FakeInput: FunctionComponent<Props> = ({
    value,
    onClick,
    dataTestId,
    errors,
    required,
    label,
    onClear,
}) => {
    const classes: Record<string, string> = useStyles();
    return (
        <Box mt={2}>
            <FormControl errors={errors}>
                <InputLabel
                    shrink={Boolean(value)}
                    required={required}
                    className={classes.inputLabel}
                >
                    {label}
                </InputLabel>
                <Box
                    className={classes.input}
                    onClick={onClick}
                    data-test={dataTestId}
                >
                    <Typography className={classes.value} component="span">
                        {value}
                    </Typography>
                </Box>
                {value && value !== '' && (
                    <Box className={classes.clear}>
                        <IconButtonComponent
                            size="small"
                            onClick={onClear}
                            icon="clear"
                            tooltipMessage={MESSAGES.clear}
                        />
                    </Box>
                )}
            </FormControl>
        </Box>
    );
};
