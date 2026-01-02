import React, { FunctionComponent, useCallback, useState } from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import moment from 'moment';
import { useSafeIntl } from '../../../localization/useSafeIntl';
import { MESSAGES } from './messages';
import { useStyles } from '../styles';
import { truncateText } from '../../../utils';

const MAX_TEXT_LENGTH = 150;

type TextProps = {
    text: string;
    hideOverflow: boolean;
    toggle: React.MouseEventHandler<HTMLSpanElement>;
    maxLength: number;
    textExpand?: string;
    textCollapse?: string;
};

const CommentText: FunctionComponent<TextProps> = ({
    text,
    hideOverflow,
    toggle,
    maxLength,
    textExpand,
    textCollapse,
}) => {
    const classes = useStyles();
    const { formatMessage } = useSafeIntl();
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
                    {textExpand ?? formatMessage(MESSAGES.textExpand)}
                </span>
            )}
            {!hideOverflow && text.length > maxLength && (
                <span
                    onClick={toggle}
                    className={classes.toggleCommentText}
                    role="button"
                    tabIndex={0}
                >
                    {textCollapse ?? formatMessage(MESSAGES.textCollapse)}
                </span>
            )}
        </div>
    );
};

type Props = {
    avatar?: string;
    author: string;
    content: string;
    postingTime?: string;
};

// credit: https://codesandbox.io/s/comment-box-with-material-ui-10p3c?file=/src/index.js:2810-4030
export const Comment: FunctionComponent<Props> = ({
    avatar,
    author,
    content,
    postingTime = '',
}) => {
    const { formatMessage } = useSafeIntl();
    const defaultClasses = useStyles();
    const [hideTextOverflow, setHideTextOverflow] = useState(
        content.length > MAX_TEXT_LENGTH,
    );
    const toggleOverflowDisplay = useCallback(
        () => setHideTextOverflow(!hideTextOverflow),
        [hideTextOverflow],
    );
    const classes = defaultClasses;
    const formattedPostingTime = `${formatMessage(
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
