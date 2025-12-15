export function SingleComment({ avatar, author, content, postingTime, classNames, actionText, onAddComment, id, }: {
    avatar?: null | undefined;
    author: any;
    content: any;
    postingTime?: string | undefined;
    classNames?: null | undefined;
    actionText?: null | undefined;
    onAddComment?: (() => void) | undefined;
    id?: null | undefined;
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
}
import React from 'react';
import PropTypes from 'prop-types';
