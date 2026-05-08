<<<<<<< HEAD
import React, { FunctionComponent, SetStateAction } from 'react';
type Props = {
    isExpanded?: boolean;
    setIsExpanded?: React.Dispatch<SetStateAction<boolean>>;
};
export declare const Expander: FunctionComponent<Props>;
export {};
=======
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
>>>>>>> main
