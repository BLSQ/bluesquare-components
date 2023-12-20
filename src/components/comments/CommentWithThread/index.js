import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Divider, Paper, Button } from '@mui/material';
import { useStyles } from '../styles';
import { MESSAGES } from './messages';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { AddComment } from '../AddComment';
import { Comment } from '../Comment';
import { SingleComment } from '../SingleComment';

const CommentWithThread = ({
    comments,
    actionText,
    onAddComment,
    parentId,
}) => {
    const classes = useStyles();
    const intl = useSafeIntl();
    const [addingComment, setAddingComment] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = useCallback(() => {
        if (isExpanded) {
            setAddingComment(false);
        }
        setIsExpanded(!isExpanded);
    }, [isExpanded]);

    const toggleAddComment = () => {
        setAddingComment(true);
        setIsExpanded(true);
    };

    const handleConfirm = useCallback(
        newComment => {
            setAddingComment(false);
            onAddComment(newComment, parentId);
        },
        [onAddComment, parentId],
    );
    const handleSingleCommentConfirm = useCallback(
        (newComment, id) => {
            setAddingComment(false);
            setIsExpanded(true);
            onAddComment(newComment, id);
        },
        [onAddComment],
    );

    const makeComment = array => {
        if (array.length === 1) {
            // const { author, dateTime, id, comment } = array[0];
            // return (
            //     <SingleComment
            //         onAddComment={handleSingleCommentConfirm}
            //         author={author}
            //         content={comment}
            //         postingTime={dateTime}
            //         id={id}
            //     />
            // );
        }
        return array.map((comment, index) => (
            <div
                key={
                    `Fragment${comment.author}${comment.dateTime}${comment.id}` ??
                    ''
                }
                className={index === 0 ? '' : classes.childComment}
            >
                <Comment
                    avatar={comment.avatar}
                    author={comment.author}
                    postingTime={comment.dateTime}
                    content={comment.comment}
                />
                {index === 0 && (
                    <div className={classes.expandThread}>
                        <Button
                            onClick={toggleExpand}
                            className={classes.button}
                            size="small"
                        >
                            {intl.formatMessage(
                                isExpanded
                                    ? MESSAGES.collapse
                                    : MESSAGES.expand,
                            )}
                        </Button>
                    </div>
                )}
                {!addingComment && (
                    <div className={classes.replyToComment}>
                        <Button
                            className={classes.button}
                            size="small"
                            onClick={toggleAddComment}
                        >
                            {actionText ??
                                intl.formatMessage(MESSAGES.addReply)}
                        </Button>
                    </div>
                )}
                {index === comments.length - 1 && addingComment && (
                    <AddComment onConfirm={handleConfirm} />
                )}
                {index < comments.length - 1 && isExpanded && (
                    <Divider
                        variant="fullWidth"
                        style={{ margin: '30px 0' }}
                        key={
                            `divider${comment.author}${comment.dateTime}${comment.id}` ??
                            ''
                        }
                    />
                )}
            </div>
        ));
    };
    if (comments.length === 1) {
        return (
            <SingleComment
                onAddComment={handleSingleCommentConfirm}
                author={comments[0].author}
                content={comments[0].comment}
                postingTime={comments[0].dateTime}
                id={comments[0].id}
                // onButtonClick={() => {
                //     setIsExpanded(true);
                // }}
            />
        );
    }
    return (
        <Paper className={classes.commentRoot} variant="outlined" elevation={1}>
            {isExpanded ? makeComment(comments) : makeComment([comments[0]])}
        </Paper>
    );
};

CommentWithThread.propTypes = {
    comments: PropTypes.array,
    actionText: PropTypes.string,
    onAddComment: PropTypes.func,
    parentId: PropTypes.number,
};
CommentWithThread.defaultProps = {
    comments: [],
    actionText: null,
    onAddComment: () => {},
    parentId: null,
};

export { CommentWithThread };
