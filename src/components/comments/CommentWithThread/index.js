import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Divider, Paper, Typography, Button } from '@material-ui/core';
import { useStyles } from '../styles';
import { MESSAGES } from '../messages';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { AddComment } from '../AddComment';
import { Comment } from '../Comment';
import '../../../css/index.css';

// const assignColors = comments => {
//     const availableColors = [
//         'black',
//         'blue',
//         'red',
//         'green',
//         'yellow',
//         'purple',
//         'amber',
//     ];
//     let colorIndex = 0;
//     const result = {};
//     comments.forEach(comment => {
//         if (!result[comment.authorId]) {
//             result[comment.authorId] = availableColors[colorIndex];
//             if (colorIndex < availableColors.length - 1) {
//                 colorIndex += 1;
//             } else {
//                 colorIndex = 0;
//             }
//         }
//     });
//     return result;
// };

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
    // const assignedColors = assignColors(comments);
    const toggleExpand = useCallback(() => {
        if (isExpanded) {
            setAddingComment(false);
        }
        setIsExpanded(!isExpanded);
    }, [isExpanded]);

    const makeComment = array =>
        array.map((comment, index) => (
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
                            // variant="contained"
                            // color="primary"
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
                        <Typography
                            variant="overline"
                            onClick={() => {
                                setAddingComment(true);
                                setIsExpanded(true);
                            }}
                        >
                            {actionText}
                        </Typography>
                    </div>
                )}
                {index === comments.length - 1 && addingComment && (
                    <AddComment
                        // buttonText={actionText}
                        onConfirm={newComment => {
                            setAddingComment(false);
                            onAddComment(newComment, parentId);
                        }}
                    />
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
    return (
        <Paper className={classes.commentRoot} variant="outlined">
            {isExpanded ? makeComment(comments) : makeComment([comments[0]])}
        </Paper>
    );
};

CommentWithThread.propTypes = {
    comments: PropTypes.array,
    actionText: PropTypes.string,
    onAddComment: PropTypes.func,
    parentId: PropTypes.number,
    limitHeight: PropTypes.bool,
};
CommentWithThread.defaultProps = {
    comments: [],
    actionText: 'add comment',
    onAddComment: () => {},
    parentId: null,
    limitHeight: false,
};

export { CommentWithThread };
