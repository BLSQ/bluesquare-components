export function Comment({ avatar, author, content, postingTime, classNames, }: {
    avatar?: null | undefined;
    author: any;
    content: any;
    postingTime?: string | undefined;
    classNames?: null | undefined;
}): React.JSX.Element;
export namespace Comment {
    namespace propTypes {
        let avatar: PropTypes.Requireable<string>;
        let author: PropTypes.Validator<string>;
        let content: PropTypes.Validator<string>;
        let postingTime: PropTypes.Requireable<string>;
        let classNames: PropTypes.Requireable<(string | null | undefined)[]>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
