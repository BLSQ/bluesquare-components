export function PageSelect({ pageIndex, pages, onPageChange }: {
    pageIndex: any;
    pages: any;
    onPageChange: any;
}): React.JSX.Element;
export namespace PageSelect {
    namespace defaultProps {
        const pages: number;
        const pageIndex: number;
    }
    namespace propTypes {
        const pages_1: PropTypes.Requireable<number>;
        export { pages_1 as pages };
        const pageIndex_1: PropTypes.Requireable<number>;
        export { pageIndex_1 as pageIndex };
        export const onPageChange: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
