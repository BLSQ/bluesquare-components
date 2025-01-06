export function Comment({ avatar, author, content, postingTime, classNames }: {
    avatar: any;
    author: any;
    content: any;
    postingTime: any;
    classNames: any;
}): React.JSX.Element;
export namespace Comment {
    namespace propTypes {
        let avatar: PropTypes.Requireable<string>;
        let author: PropTypes.Validator<string>;
        let content: PropTypes.Validator<string>;
        let postingTime: PropTypes.Requireable<string>;
        let classNames: PropTypes.Requireable<(string | null | undefined)[]>;
    }
    namespace defaultProps {
        let avatar_1: null;
        export { avatar_1 as avatar };
        let postingTime_1: string;
        export { postingTime_1 as postingTime };
        let classNames_1: null;
        export { classNames_1 as classNames };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
