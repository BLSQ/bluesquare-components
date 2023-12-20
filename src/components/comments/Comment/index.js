import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid, Typography } from '@mui/material';
import moment from 'moment';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from './messages';
import { useStyles } from '../styles';
import { truncateText } from '../../../utils';

const MAX_TEXT_LENGTH = 150;

const CommentText = ({
    text,
    hideOverflow,
    toggle,
    maxLength,
    textExpand,
    textCollapse,
}) => {
    const classes = useStyles();
    const intl = useSafeIntl();
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
                    {textExpand ?? intl.formatMessage(MESSAGES.textExpand)}
                </span>
            )}
            {!hideOverflow && text.length > maxLength && (
                <span
                    onClick={toggle}
                    className={classes.toggleCommentText}
                    role="button"
                    tabIndex={0}
                >
                    {textCollapse ?? intl.formatMessage(MESSAGES.textCollapse)}
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
    textExpand: PropTypes.string,
    textCollapse: PropTypes.string,
};

CommentText.defaultProps = {
    textExpand: null,
    textCollapse: null,
};

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
    const formattedPostingTime = `${intl.formatMessage(
        MESSAGES.postingTime,
    )}  ${moment(postingTime).fromNow()}`;
    return (
        <Grid container wrap="nowrap" spacing={4}>
            <Grid item>
                <Avatar alt={author} src={avatar} />
            </Grid>

            <Grid className={classes.commentGrid} item xs zeroMinWidth>
                <h4 className={classes.commentAuthor}>{author}</h4>
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
                    {formattedPostingTime}
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
