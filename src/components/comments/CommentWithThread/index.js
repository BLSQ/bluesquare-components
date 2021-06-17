import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Divider, Paper, Typography } from '@material-ui/core';
import { useStyles } from '../styles';
// import { MESSAGES } from '../messages';
// import { useSafeIntl } from '../../../utils/useSafeIntl';
import { AddComment } from '../AddComment';
import { Comment } from '../Comment';

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
    // const intl = useSafeIntl();
    const [addingComment, setAddingComment] = useState(false);
    // const assignedColors = assignColors(comments);
    const commentsArray = comments.map((comment, index) => (
        <Fragment
            key={
                `Fragment${comment.author}${comment.dateTime}${comment.id}` ??
                ''
            }
            // className={classes.commentWrapper}
        >
            {/* <Grid
                container
                wrap="nowrap"
                spacing={2}
                key={
                    `Grid${comment.author}${comment.dateTime}${comment.id}` ??
                    ''
                }
            >
                <Grid item>
                    {comment.avatar && (
                        <Avatar alt={comment.author} src={comment.avatar} />
                    )}
                </Grid>
                <Grid className={classes.commentGrid} item xs zeroMinWidth>
                    <h4
                        className={`${classes.commentAuthor} ${
                            classes[assignedColors[comment.authorId]]
                        }`}
                    >
                        {comment.author}
                    </h4>
                    <p className={classes.commentText}>{comment.comment}</p>
                    <Typography
                        variant="body2"
                        className={classes.commentPostingTime}
                    >
                        {`${intl.formatMessage(MESSAGES.postingTime)} ${moment(
                            comment.dateTime,
                        ).fromNow()}`}
                    </Typography>
                </Grid>
            </Grid> */}
            <Comment
                avatar={comment.avatar}
                author={comment.author}
                postingTime={comment.dateTime}
                content={comment.comment}
            />
            {index === comments.length - 1 && !addingComment && (
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
            {index === comments.length - 1 && addingComment && (
                <AddComment
                    buttonText={actionText}
                    onConfirm={newComment => {
                        setAddingComment(false);
                        onAddComment(newComment, parentId);
                    }}
                />
            )}
            {index < comments.length - 1 && (
                <Divider
                    variant="fullWidth"
                    style={{ margin: '30px 0' }}
                    key={
                        `divider${comment.author}${comment.dateTime}${comment.id}` ??
                        ''
                    }
                />
            )}
        </Fragment>
    ));
    return <Paper className={classes.commentRoot}>{commentsArray}</Paper>;
};

CommentWithThread.propTypes = {
    comments: PropTypes.array,
    actionText: PropTypes.string,
    onAddComment: PropTypes.func,
    parentId: PropTypes.number,
};
CommentWithThread.defaultProps = {
    comments: [],
    actionText: 'add comment',
    onAddComment: () => {},
    parentId: null,
};

export { CommentWithThread };
