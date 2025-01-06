export function SingleComment({ avatar, author, content, postingTime, classNames, actionText, onAddComment, id, }: {
    avatar: any;
    author: any;
    content: any;
    postingTime: any;
    classNames: any;
    actionText: any;
    onAddComment: any;
    id: any;
}): React.JSX.Element;
export namespace SingleComment {
    namespace propTypes {
        let avatar: PropTypes.Requireable<string>;
        let author: PropTypes.Validator<string>;
        let content: PropTypes.Validator<string>;
        let postingTime: PropTypes.Requireable<string>;
        let classNames: PropTypes.Requireable<(string | null | undefined)[]>;
        let actionText: PropTypes.Requireable<string>;
        let onAddComment: PropTypes.Requireable<(...args: any[]) => any>;
        let id: PropTypes.Requireable<number>;
    }
    namespace defaultProps {
        let avatar_1: null;
        export { avatar_1 as avatar };
        let postingTime_1: string;
        export { postingTime_1 as postingTime };
        let classNames_1: null;
        export { classNames_1 as classNames };
        let actionText_1: null;
        export { actionText_1 as actionText };
        export function onAddComment_1(): void;
        export { onAddComment_1 as onAddComment };
        let id_1: null;
        export { id_1 as id };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
