import React, { FunctionComponent, useCallback, useState } from 'react';
import { TextareaAutosize, Button, Grid } from '@mui/material';
import { useSafeIntl } from '../../../localization/useSafeIntl';
import { MESSAGES } from './messages';
import { textPlaceholder } from '../../../constants/iaso/uiConstants';
import { SxStyles } from '../../../styles/iaso/types';

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

const styles: SxStyles = {
    textArea: {
        width: '100%',
        borderRadius: '6px',
        border: '1px solid #A2A2A2',
        padding: '8px',
        resize: 'vertical',
    },
    left: { textAlign: 'left' },
    right: { textAlign: 'right' },
    center: { textAlign: 'center' },
    buttonContainer: {
        mb: theme => theme.spacing(2),
        ml: 'auto',
    },
};

export const AddComment: FunctionComponent<Props> = ({
    placeholder = textPlaceholder,
    minRows = 3,
    maxRows = 5,
    onChange = () => {},
    className = '',
    buttonText,
    onConfirm = () => {},
    position = '',
    inline = true,
}) => {
    const [comment, setComment] = useState('');
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
            sx={position ? styles[position] : null}
        >
            <Grid
                item
                sx={{
                    width: '100%',
                    marginTop: '20px',
                }}
            >
                <TextareaAutosize
                    className={className ?? ''}
                    style={styles.textArea as SxStyles}
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
            <Grid item sx={styles.buttonContainer}>
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
