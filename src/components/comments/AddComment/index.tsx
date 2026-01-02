import React, { FunctionComponent, useCallback, useState } from 'react';
import { TextareaAutosize, Button, Grid } from '@mui/material';
import { useSafeIntl } from '../../../localization/useSafeIntl';
import { MESSAGES } from './messages';
import { useStyles } from './styles';
import { textPlaceholder } from '../../../constants/iaso/uiConstants';

type Props = {
    placeholder?: string;
    minRows?: number;
    maxRows?: number;
    onChange?: (comment: string) => void;
    className?: string;
    buttonText?: string;
    onConfirm?: (comment: string) => void;
    position?: string;
    inline?: boolean;
};

export const AddComment: FunctionComponent<Props> = ({
    placeholder = textPlaceholder,
    minRows = 3,
    maxRows = 5,
    onChange = () => {},
    className = '',
    buttonText = '',
    onConfirm = () => {},
    position = '',
    inline = true,
}) => {
    const [comment, setComment] = useState('');
    const classes = useStyles();
    const { formatMessage } = useSafeIntl();
    const handleConfirm = useCallback(() => {
        onConfirm(comment);
        setComment('');
    }, [comment]);
    const handleChange = e => {
        setComment(e.target.value);
        onChange(e.target.value);
    };
    return (
        <Grid
            container
            direction={inline ? 'row' : 'column'}
            alignItems="center"
            spacing={2}
            className={position ? classes[position] : null}
        >
            <Grid item className={classes.textAreaContainer}>
                <TextareaAutosize
                    className={className ?? classes.textArea}
                    minRows={minRows}
                    maxRows={maxRows}
                    aria-label="write comment here"
                    placeholder={
                        placeholder ??
                        formatMessage(MESSAGES.textAreaPlaceholder)
                    }
                    onChange={handleChange}
                    value={comment}
                    autoFocus
                />
            </Grid>
            <Grid item className={classes.commentConfirmButton}>
                <Button
                    onClick={handleConfirm}
                    variant="contained"
                    color="primary"
                >
                    {buttonText ?? formatMessage(MESSAGES.confirmComment)}
                </Button>
            </Grid>
        </Grid>
    );
};
