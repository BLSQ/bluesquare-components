import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Divider, Paper, Grid, Avatar } from '@material-ui/core';
import { useStyles } from '../Comment/styles';
import { MESSAGES } from '../Comment/messages';
import { useSafeIntl } from '../../utils/useSafeIntl';

const CommentsList = ({ comments }) => {
    const classes = useStyles();
    const intl = useSafeIntl();
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
                    <h4 className={classes.commentAuthor}>{comment.author}</h4>
                    <p className={classes.commentText}>{comment.comment}</p>
                    <p className={classes.commentPostingTime}>
                        {`${intl.formatMessage(MESSAGES.postingTime)} ${
                            comment.dateTime
                        }`}
                    </p>
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
};
CommentsList.defaultProps = {
    comments: [],
};

export { CommentsList };
