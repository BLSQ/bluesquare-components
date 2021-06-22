import { TextareaAutosize, Button, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from './messages';
import { useStyles } from './styles';
import '../../../css/index.css';

const AddComment = ({
    placeholder,
    minRows,
    maxRows,
    onChange,
    className,
    buttonText,
    onConfirm,
    position,
    inline,
}) => {
    const [comment, setComment] = useState('');
    const classes = useStyles();
    const intl = useSafeIntl();
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
                    rowsMin={minRows}
                    rowsMax={maxRows}
                    aria-label="write comment here"
                    placeholder={
                        placeholder ??
                        intl.formatMessage(MESSAGES.textAreaPlaceholder)
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
                    {buttonText ?? intl.formatMessage(MESSAGES.confirmComment)}
                </Button>
            </Grid>
        </Grid>
    );
};

AddComment.propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string,
    minRows: PropTypes.number,
    maxRows: PropTypes.number,
    onChange: PropTypes.func,
    onConfirm: PropTypes.func,
    buttonText: PropTypes.string,
    position: PropTypes.string,
    inline: PropTypes.bool,
};
AddComment.defaultProps = {
    placeholder: null,
    minRows: 3,
    maxRows: 5,
    onChange: () => {},
    className: null,
    buttonText: null,
    onConfirm: () => {},
    position: '',
    inline: true,
};
export { AddComment };
