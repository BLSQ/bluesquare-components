/**
 * @param {Object} props
 * @param {Array} [props.headerGroups]
 * @param {(sort: any) => void} [props.setSortBy]
 * @param {boolean} [props.multiSortEnabled]
 * @param {Array} [props.sortBy]
 */
export function Head({ headerGroups, setSortBy, multiSortEnabled, sortBy }: {
    headerGroups?: any[] | undefined;
    setSortBy?: ((sort: any) => void) | undefined;
    multiSortEnabled?: boolean | undefined;
    sortBy?: any[] | undefined;
}): React.JSX.Element;
export namespace Head {
    namespace propTypes {
        let headerGroups: PropTypes.Requireable<any[]>;
        let setSortBy: PropTypes.Requireable<(...args: any[]) => any>;
        let sortBy: PropTypes.Requireable<any[]>;
        let multiSortEnabled: PropTypes.Validator<boolean>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
