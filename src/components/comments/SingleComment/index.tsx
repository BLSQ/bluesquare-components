import React, { useState, useCallback, FunctionComponent } from 'react';
import { Paper, Button } from '@mui/material';
import { useSafeIntl } from '../../../localization/useSafeIntl';
import { MESSAGES } from './messages';
import { useStyles } from '../styles';
import { AddComment } from '../AddComment';
import { Comment } from '../Comment';

type Props = {
    avatar?: string;
    author: string;
    content: string;
    postingTime?: string;
    actionText?: string;
    onAddComment?: (newComment: string, id?: number) => void;
    id?: number;
};

// credit: https://codesandbox.io/s/comment-box-with-material-ui-10p3c?file=/src/index.js:2810-4030
export const SingleComment: FunctionComponent<Props> = ({
    avatar,
    author,
    content,
    postingTime = '',
    actionText,
    onAddComment = () => {},
    id,
}) => {
    const intl = useSafeIntl();
    const defaultClasses = useStyles();
    const [addingComment, setAddingComment] = useState(false);

    const classes = defaultClasses;
    const handleConfirm = useCallback(
        newComment => {
            setAddingComment(false);
            onAddComment(newComment, id);
        },
        [id, onAddComment],
    );
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
                <AddComment position="right" onConfirm={handleConfirm} />
            )}
        </Paper>
    );
};
