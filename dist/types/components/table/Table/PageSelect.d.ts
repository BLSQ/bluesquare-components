export function PageSelect({ pageIndex, pages, onPageChange }: {
    pageIndex: any;
    pages: any;
    onPageChange: any;
}): React.JSX.Element;
export namespace PageSelect {
    namespace defaultProps {
        let pages: number;
        let pageIndex: number;
    }
    namespace propTypes {
        let pages_1: PropTypes.Requireable<number>;
        export { pages_1 as pages };
        let pageIndex_1: PropTypes.Requireable<number>;
        export { pageIndex_1 as pageIndex };
        export let onPageChange: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
