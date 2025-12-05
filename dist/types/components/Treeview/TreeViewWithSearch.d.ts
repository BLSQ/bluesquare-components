export function TreeViewWithSearch({ label, getChildrenData, getRootData, toggleOnLabelClick, onSelect, minResultCount, inputLabelObject, withSearchButton, request, makeDropDownText, toolTip, parseNodeIds, onUpdate, multiselect, preselected, preexpanded, selectedData, allowSelection, dependency, childrenDependency, queryOptions, childrenQueryOptions, fetchDetails, }: {
    label: any;
    getChildrenData?: (() => void) | undefined;
    getRootData?: (() => void) | undefined;
    toggleOnLabelClick?: boolean | undefined;
    onSelect?: (() => void) | undefined;
    minResultCount?: number | undefined;
    inputLabelObject?: {
        id: string;
        defaultMessage: string;
    } | undefined;
    withSearchButton?: boolean | undefined;
    request: any;
    makeDropDownText: any;
    toolTip?: null | undefined;
    parseNodeIds: any;
    onUpdate?: (() => void) | undefined;
    multiselect?: boolean | undefined;
    preselected?: null | undefined;
    preexpanded?: null | undefined;
    selectedData?: never[] | undefined;
    allowSelection?: (() => boolean) | undefined;
    dependency?: undefined;
    childrenDependency?: undefined;
    queryOptions?: {} | undefined;
    childrenQueryOptions?: {} | undefined;
    fetchDetails?: ((item: any) => any) | undefined;
}): React.JSX.Element;
export namespace TreeViewWithSearch {
    namespace propTypes {
        export { func as getChildrenData };
        export { func as getRootData };
        export { bool as toggleOnLabelClick };
        export { func as onSelect };
        export { number as minResultCount };
        export { object as inputLabelObject };
        export { bool as withSearchButton };
        export let request: import("prop-types").Validator<(...args: any[]) => any>;
        export let makeDropDownText: import("prop-types").Validator<(...args: any[]) => any>;
        export { func as toolTip };
        export let parseNodeIds: import("prop-types").Validator<(...args: any[]) => any>;
        export { func as onUpdate };
        export { bool as multiselect };
        export let preselected: import("prop-types").Requireable<NonNullable<string | any[] | null | undefined>>;
        export { any as preexpanded };
        export let selectedData: import("prop-types").Requireable<object>;
        export let label: import("prop-types").Validator<(...args: any[]) => any>;
        export { func as allowSelection };
        export { any as dependency };
        export { any as childrenDependency };
        export { object as queryOptions };
        export { object as childrenQueryOptions };
        export { func as fetchDetails };
    }
}
import React from 'react';
import { func } from 'prop-types';
import { bool } from 'prop-types';
import { number } from 'prop-types';
import { object } from 'prop-types';
import { any } from 'prop-types';
