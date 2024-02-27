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
        const avatar: PropTypes.Requireable<string>;
        const author: PropTypes.Validator<string>;
        const content: PropTypes.Validator<string>;
        const postingTime: PropTypes.Requireable<string>;
        const classNames: PropTypes.Requireable<(string | null | undefined)[]>;
        const actionText: PropTypes.Requireable<string>;
        const onAddComment: PropTypes.Requireable<(...args: any[]) => any>;
        const id: PropTypes.Requireable<number>;
    }
    namespace defaultProps {
        const avatar_1: null;
        export { avatar_1 as avatar };
        const postingTime_1: string;
        export { postingTime_1 as postingTime };
        const classNames_1: null;
        export { classNames_1 as classNames };
        const actionText_1: null;
        export { actionText_1 as actionText };
        export function onAddComment_1(): void;
        export { onAddComment_1 as onAddComment };
        const id_1: null;
        export { id_1 as id };
    }
}
import React from "react";
import PropTypes from "prop-types";
