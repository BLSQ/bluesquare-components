import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Button } from '@material-ui/core';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from './messages';
import { useStyles } from '../styles';
import { AddComment } from '../AddComment';
import { Comment } from '../Comment';
import '../../../css/index.css';

// TODO refactor style import
// credit: https://codesandbox.io/s/comment-box-with-material-ui-10p3c?file=/src/index.js:2810-4030
const SingleComment = ({
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
        <Paper variant="outlined" className={classes.commentRoot}>
            <Comment
                avatar={avatar}
                author={author}
                postingTime={postingTime}
                content={content}
            />
            {!addingComment && (
                <div className={classes.replyToComment}>
                    <Button
                        className={classes.button}
                        size="small"
                        onClick={() => {
                            setAddingComment(true);
                        }}
                    >
                        {actionText ?? intl.formatMessage(MESSAGES.reply)}
                    </Button>
                </div>
            )}
            {addingComment && (
                <AddComment
                    position="right"
                    onConfirm={newComment => {
                        setAddingComment(false);
                        onAddComment(newComment, id);
                    }}
                />
            )}
        </Paper>
    );
};
SingleComment.propTypes = {
    avatar: PropTypes.string,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    postingTime: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string),
    actionText: PropTypes.string,
    onAddComment: PropTypes.func,
    id: PropTypes.number,
};
SingleComment.defaultProps = {
    avatar: null,
    postingTime: '',
    classNames: null,
    actionText: null,
    onAddComment: () => {},
    id: null,
};

export { SingleComment };
