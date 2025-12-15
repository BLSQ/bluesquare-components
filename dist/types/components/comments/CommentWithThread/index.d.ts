export function CommentWithThread({ comments, actionText, onAddComment, parentId, }: {
    comments?: never[] | undefined;
    actionText?: null | undefined;
    onAddComment?: (() => void) | undefined;
    parentId?: null | undefined;
}): React.JSX.Element;
export namespace CommentWithThread {
    namespace propTypes {
        let comments: PropTypes.Requireable<any[]>;
        let actionText: PropTypes.Requireable<string>;
        let onAddComment: PropTypes.Requireable<(...args: any[]) => any>;
        let parentId: PropTypes.Requireable<number>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
