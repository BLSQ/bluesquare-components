import { FunctionComponent } from 'react';
/**
 * @param {Object} props
 * @param {Array} [props.headerGroups]
 * @param {(sort: any) => void} [props.setSortBy]
 * @param {boolean} [props.multiSortEnabled]
 * @param {Array} [props.sortBy]
 */
type Props = {
    headerGroups?: any[];
    setSortBy?: (sort: {
        desc: boolean;
        id: any;
    }[]) => void;
    sortBy?: any[];
    multiSortEnabled: boolean;
};
export declare const Head: FunctionComponent<Props>;
export {};
