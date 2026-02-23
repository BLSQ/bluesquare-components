export function Expander({ isExpanded, setIsExpanded }: {
    isExpanded?: boolean | undefined;
    setIsExpanded?: (() => null) | undefined;
}): React.JSX.Element;
export namespace Expander {
    namespace propTypes {
        let isExpanded: PropTypes.Requireable<boolean>;
        let setIsExpanded: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
