export function CommentWithThread({ comments, actionText, onAddComment, parentId, }: {
    comments: any;
    actionText: any;
    onAddComment: any;
    parentId: any;
}): React.JSX.Element;
export namespace CommentWithThread {
    namespace propTypes {
        let comments: PropTypes.Requireable<any[]>;
        let actionText: PropTypes.Requireable<string>;
        let onAddComment: PropTypes.Requireable<(...args: any[]) => any>;
        let parentId: PropTypes.Requireable<number>;
    }
    namespace defaultProps {
        let comments_1: never[];
        export { comments_1 as comments };
        let actionText_1: null;
        export { actionText_1 as actionText };
        export function onAddComment_1(): void;
        export { onAddComment_1 as onAddComment };
        let parentId_1: null;
        export { parentId_1 as parentId };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
