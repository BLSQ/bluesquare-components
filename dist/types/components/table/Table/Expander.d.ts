export function Expander({ isExpanded, setIsExpanded }: {
    isExpanded: any;
    setIsExpanded: any;
}): React.JSX.Element;
export namespace Expander {
    namespace defaultProps {
        let isExpanded: boolean;
        function setIsExpanded(): null;
    }
    namespace propTypes {
        let isExpanded_1: PropTypes.Requireable<boolean>;
        export { isExpanded_1 as isExpanded };
        let setIsExpanded_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { setIsExpanded_1 as setIsExpanded };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
