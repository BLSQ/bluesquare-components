export function Head({ headerGroups, setSortBy, multiSortEnabled, sortBy }: {
    headerGroups: any;
    setSortBy: any;
    multiSortEnabled: any;
    sortBy: any;
}): React.JSX.Element;
export namespace Head {
    namespace defaultProps {
        const headerGroups: never[];
        const sortBy: never[];
        function setSortBy(): null;
    }
    namespace propTypes {
        const headerGroups_1: PropTypes.Requireable<any[]>;
        export { headerGroups_1 as headerGroups };
        const setSortBy_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { setSortBy_1 as setSortBy };
        const sortBy_1: PropTypes.Requireable<any[]>;
        export { sortBy_1 as sortBy };
        export const multiSortEnabled: PropTypes.Validator<boolean>;
    }
}
import React from "react";
import PropTypes from "prop-types";
