import { TextareaAutosize, Button, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from '../messages';
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
                    placeholder={placeholder}
                    onChange={e => {
                        setComment(e.target.value);
                        onChange(e.target.value);
                    }}
                    value={comment}
                    autoFocus
                />
            </Grid>
            <Grid item className={classes.commentConfirmButton}>
                <Button
                    onClick={() => {
                        onConfirm(comment);
                        setComment('');
                    }}
                    className={classes.button}
                    // variant="contained"
                    // color="primary"
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
    placeholder: 'Write your comment here',
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
