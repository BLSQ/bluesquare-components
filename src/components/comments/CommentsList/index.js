import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Divider, Paper, Grid, Avatar, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { MESSAGES } from '../../Comment/messages';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { AddComment } from '../AddComment';

const assignColors = comments => {
    const availableColors = [
        'black',
        'blue',
        'red',
        'green',
        'yellow',
        'purple',
        'amber',
    ];
    let colorIndex = 0;
    const result = {};
    comments.forEach(comment => {
        if (!result[comment.authorId]) {
            result[comment.authorId] = availableColors[colorIndex];
            if (colorIndex < availableColors.length - 1) {
                colorIndex += 1;
            } else {
                colorIndex = 0;
            }
        }
    });
    return result;
};

const CommentsList = ({ comments, actionText, onAddComment }) => {
    const classes = useStyles();
    const intl = useSafeIntl();
    const [addingComment, setAddingComment] = useState(false);
    const assignedColors = assignColors(comments);
    const commentsArray = comments.map((comment, index) => (
        <Fragment
            key={
                `Fragment${comment.author}${comment.dateTime}${comment.id}` ??
                ''
            }
            // className={classes.commentWrapper}
        >
            <Grid
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
                    <p className={classes.commentPostingTime}>
                        {`${intl.formatMessage(MESSAGES.postingTime)} ${
                            comment.dateTime
                        }`}
                    </p>
                    {index === comments.length - 1 && !addingComment && (
                        <Typography
                            variant="overline"
                            onClick={() => {
                                setAddingComment(true);
                            }}
                        >
                            {actionText}
                        </Typography>
                    )}
                    {index === comments.length - 1 && addingComment && (
                        <AddComment
                            buttonText={actionText}
                            onConfirm={newComment => {
                                setAddingComment(false);
                                onAddComment(
                                    newComment,
                                    comment.parentId ?? comment.id,
                                );
                            }}
                        />
                    )}
                </Grid>
            </Grid>
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

CommentsList.propTypes = {
    comments: PropTypes.array,
    actionText: PropTypes.string,
    onAddComment: PropTypes.func,
};
CommentsList.defaultProps = {
    comments: [],
    actionText: 'add comment',
    onAddComment: () => {},
};

export { CommentsList };
