export function Comment({ avatar, author, content, postingTime, classNames }: {
    avatar: any;
    author: any;
    content: any;
    postingTime: any;
    classNames: any;
}): React.JSX.Element;
export namespace Comment {
    namespace propTypes {
        const avatar: PropTypes.Requireable<string>;
        const author: PropTypes.Validator<string>;
        const content: PropTypes.Validator<string>;
        const postingTime: PropTypes.Requireable<string>;
        const classNames: PropTypes.Requireable<(string | null | undefined)[]>;
    }
    namespace defaultProps {
        const avatar_1: null;
        export { avatar_1 as avatar };
        const postingTime_1: string;
        export { postingTime_1 as postingTime };
        const classNames_1: null;
        export { classNames_1 as classNames };
    }
}
import React from "react";
import PropTypes from "prop-types";
