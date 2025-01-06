export function CommentWithThread({ comments, actionText, onAddComment, parentId, }: {
    comments: any;
    actionText: any;
    onAddComment: any;
    parentId: any;
}): React.JSX.Element;
export namespace CommentWithThread {
    namespace propTypes {
        const comments: PropTypes.Requireable<any[]>;
        const actionText: PropTypes.Requireable<string>;
        const onAddComment: PropTypes.Requireable<(...args: any[]) => any>;
        const parentId: PropTypes.Requireable<number>;
    }
    namespace defaultProps {
        const comments_1: never[];
        export { comments_1 as comments };
        const actionText_1: null;
        export { actionText_1 as actionText };
        export function onAddComment_1(): void;
        export { onAddComment_1 as onAddComment };
        const parentId_1: null;
        export { parentId_1 as parentId };
    }
}
import React from "react";
import PropTypes from "prop-types";
