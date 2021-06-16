import { TextareaAutosize, Button, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { commonStyles } from '../../../styles/iaso/common';

const styles = theme => ({
    ...commonStyles(theme),
    textAreaContainer: {
        width: '75%',
    },
    textArea: {
        width: '100%',
        borderRadius: '6px',
        borderColor: '#A2A2A2',
        '&:focus-visible': { border: '1px solid red' },
        '&:focus-visible :focus': { border: '1px solid red' },
    },
    left: { textAlign: 'left' },
    right: { textAlign: 'right' },
    center: { textAlign: 'center' },
});
const useStyles = makeStyles(styles);

const AddComment = ({
    placeholder,
    minRows,
    maxRows,
    onChange,
    className,
    buttonText,
    onConfirm,
    position,
}) => {
    const [comment, setComment] = useState('');
    const classes = useStyles();
    return (
        <Grid
            container
            direction="row"
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
            <Grid item>
                <Button
                    onClick={() => {
                        onConfirm(comment);
                        setComment('');
                    }}
                >
                    {buttonText}
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
};
AddComment.defaultProps = {
    placeholder: 'Write your comment here',
    minRows: 3,
    maxRows: 5,
    onChange: () => {},
    className: null,
    buttonText: 'Confirm',
    onConfirm: () => {},
    position: '',
};
export { AddComment };
