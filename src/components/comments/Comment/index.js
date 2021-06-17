import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid, Typography } from '@material-ui/core';
import moment from 'moment';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from '../messages';
import { useStyles } from '../styles';
import '../../../css/index.css';

const MAX_TEXT_LENGTH = 150;
const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return `${text.substring(0, maxLength - 4)}...   `;
    }
    return `${text}   `;
};

const CommentText = ({ text, hideOverflow, toggle, maxLength }) => {
    const classes = useStyles();
    return (
        <div className={classes.commentText}>
            <p>
                {hideOverflow && text.length > maxLength
                    ? truncateText(text, MAX_TEXT_LENGTH)
                    : text}{' '}
            </p>
            {hideOverflow && (
                <span
                    onClick={toggle}
                    className={classes.toggleCommentText}
                    role="button"
                    tabIndex={0}
                >
                    Show More
                </span>
            )}
            {!hideOverflow && text.length > maxLength && (
                <span
                    onClick={toggle}
                    className={classes.toggleCommentText}
                    role="button"
                    tabIndex={0}
                >
                    Show Less
                </span>
            )}
        </div>
    );
};
CommentText.propTypes = {
    text: PropTypes.string.isRequired,
    hideOverflow: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    maxLength: PropTypes.number.isRequired,
};

// TODO refactor style import
// credit: https://codesandbox.io/s/comment-box-with-material-ui-10p3c?file=/src/index.js:2810-4030
const Comment = ({ avatar, author, content, postingTime, classNames }) => {
    const intl = useSafeIntl();
    const defaultClasses = useStyles();
    const [hideTextOverflow, setHideTextOverflow] = useState(
        content.length > MAX_TEXT_LENGTH,
    );
    const toggleOverflowDisplay = useCallback(
        () => setHideTextOverflow(!hideTextOverflow),
        [hideTextOverflow],
    );
    const classes = classNames ?? defaultClasses;
    return (
        <Grid container wrap="nowrap" spacing={4}>
            {avatar && (
                <Grid item>
                    {' '}
                    <Avatar alt={author} src={avatar} />
                </Grid>
            )}
            <Grid className={classes.commentGrid} item xs zeroMinWidth>
                <h4 className={classes.commentAuthor}>{author}</h4>
                {/* <p className={classes.commentText}>{content}</p> */}
                <CommentText
                    text={content}
                    hideOverflow={hideTextOverflow}
                    toggle={toggleOverflowDisplay}
                    maxLength={MAX_TEXT_LENGTH}
                />
                <Typography
                    variant="body2"
                    className={classes.commentPostingTime}
                    component="div"
                >
                    {`${intl.formatMessage(MESSAGES.postingTime)}  ${moment(
                        postingTime,
                    ).fromNow()}`}
                </Typography>
            </Grid>
        </Grid>
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
