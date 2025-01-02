export function Button({ primary, backgroundColor, size, label, ...props }: {
    [x: string]: any;
    primary: any;
    backgroundColor: any;
    size: any;
    label: any;
}): React.JSX.Element;
export namespace Button {
    namespace propTypes {
        let primary: PropTypes.Requireable<boolean>;
        let backgroundColor: PropTypes.Requireable<string>;
        let size: PropTypes.Requireable<string>;
        let label: PropTypes.Validator<string>;
        let onClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        let backgroundColor_1: null;
        export { backgroundColor_1 as backgroundColor };
        let primary_1: boolean;
        export { primary_1 as primary };
        let size_1: string;
        export { size_1 as size };
        let onClick_1: undefined;
        export { onClick_1 as onClick };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
