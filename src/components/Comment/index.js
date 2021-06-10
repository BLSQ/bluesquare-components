import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid, Paper } from '@material-ui/core';
import { useSafeIntl } from '../../utils/useSafeIntl';
import { MESSAGES } from './messages';
import { useStyles } from './styles';
import '../../css/index.css';

// credit: https://codesandbox.io/s/comment-box-with-material-ui-10p3c?file=/src/index.js:2810-4030
const Comment = ({ avatar, author, content, postingTime, classNames }) => {
    const intl = useSafeIntl();
    const defaultClasses = useStyles();
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
                    <p className={classes.commentPostiingTime}>
                        {`${intl.formatMessage(
                            MESSAGES.postingTime,
                        )} ${postingTime}`}
                    </p>
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
};
Comment.defaultProps = {
    avatar: null,
    postingTime: '',
    classNames: null,
};

export { Comment };
