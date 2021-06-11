import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

const CommentsList = ({ comments }) => {
    const commentsArray = comments.map(comment => (
        <Comment
            key={`comment${comment.author}${comment.dateTime}${comment.id}`}
            author={comment.author}
            content={comment.comment}
            postingTime={comment.dateTime}
        />
    ));
    return <>{commentsArray}</>;
};

CommentsList.propTypes = {
    comments: PropTypes.array,
};
CommentsList.defaultProps = {
    comments: [],
};

export { CommentsList };
