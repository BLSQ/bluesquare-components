import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import moment from 'moment';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from './messages';
import { useStyles } from './styles';
import { AddComment } from '../AddComment';
import '../../../css/index.css';

// TODO refactor style import
// credit: https://codesandbox.io/s/comment-box-with-material-ui-10p3c?file=/src/index.js:2810-4030
const Comment = ({
    avatar,
    author,
    content,
    postingTime,
    classNames,
    actionText,
    onAddComment,
    id,
}) => {
    const intl = useSafeIntl();
    const defaultClasses = useStyles();
    const [addingComment, setAddingComment] = useState(false);

    const classes = classNames ?? defaultClasses;
    return (
        <Paper className={classes.commentRoot}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    {avatar && <Avatar alt={author} src={avatar} />}
                </Grid>
                <Grid className={classes.commentGrid} item xs zeroMinWidth>
                    <h4 className={classes.commentAuthor}>{author}</h4>
                    <p className={classes.commentText}>{content}</p>
                    <Typography
                        variant="body2"
                        className={classes.commentPostingTime}
                    >
                        {`${intl.formatMessage(MESSAGES.postingTime)}  ${moment(
                            parseInt(postingTime, 10),
                        ).fromNow()}`}
                    </Typography>
                    {!addingComment && (
                        <div className={classes.replyToComment}>
                            <Typography
                                variant="overline"
                                onClick={() => {
                                    setAddingComment(true);
                                }}
                            >
                                {actionText}
                            </Typography>
                        </div>
                    )}
                    {addingComment && (
                        <AddComment
                            position="right"
                            buttonText={actionText}
                            onConfirm={newComment => {
                                setAddingComment(false);
                                onAddComment(newComment, id);
                            }}
                        />
                    )}
                </Grid>
            </Grid>
        </Paper>
    );
};
Comment.propTypes = {
    avatar: PropTypes.string,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    postingTime: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string),
    actionText: PropTypes.string,
    onAddComment: PropTypes.func,
    id: PropTypes.number,
};
Comment.defaultProps = {
    avatar: null,
    postingTime: '',
    classNames: null,
    actionText: 'add comment',
    onAddComment: () => {},
    id: null,
};

export { Comment };
