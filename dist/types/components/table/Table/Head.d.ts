export function Head({ headerGroups, setSortBy, multiSortEnabled, sortBy }: {
    headerGroups: any;
    setSortBy: any;
    multiSortEnabled: any;
    sortBy: any;
}): React.JSX.Element;
export namespace Head {
    namespace defaultProps {
        let headerGroups: never[];
        let sortBy: never[];
        function setSortBy(): null;
    }
    namespace propTypes {
        let headerGroups_1: PropTypes.Requireable<any[]>;
        export { headerGroups_1 as headerGroups };
        let setSortBy_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { setSortBy_1 as setSortBy };
        let sortBy_1: PropTypes.Requireable<any[]>;
        export { sortBy_1 as sortBy };
        export let multiSortEnabled: PropTypes.Validator<boolean>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
