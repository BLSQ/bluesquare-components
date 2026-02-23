export function PageSelect({ pageIndex, pages, onPageChange }: {
    pageIndex?: number | undefined;
    pages?: number | undefined;
    onPageChange: any;
}): React.JSX.Element;
export namespace PageSelect {
    namespace propTypes {
        let pages: PropTypes.Requireable<number>;
        let pageIndex: PropTypes.Requireable<number>;
        let onPageChange: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
