export function TreeViewWithSearch({ label, getChildrenData, getRootData, toggleOnLabelClick, onSelect, minResultCount, inputLabelObject, withSearchButton, request, makeDropDownText, toolTip, parseNodeIds, onUpdate, multiselect, preselected, preexpanded, selectedData, allowSelection, dependency, childrenDependency, queryOptions, childrenQueryOptions, fetchDetails, }: {
    label: any;
    getChildrenData: any;
    getRootData: any;
    toggleOnLabelClick: any;
    onSelect: any;
    minResultCount: any;
    inputLabelObject: any;
    withSearchButton: any;
    request: any;
    makeDropDownText: any;
    toolTip: any;
    parseNodeIds: any;
    onUpdate: any;
    multiselect: any;
    preselected: any;
    preexpanded: any;
    selectedData: any;
    allowSelection: any;
    dependency: any;
    childrenDependency: any;
    queryOptions?: {} | undefined;
    childrenQueryOptions?: {} | undefined;
    fetchDetails: any;
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
    namespace defaultProps {
        export function getChildrenData(): void;
        export function getRootData(): void;
        export let toggleOnLabelClick: boolean;
        export function onSelect(): void;
        export let minResultCount: number;
        export let inputLabelObject: {
            id: string;
            defaultMessage: string;
        };
        export let withSearchButton: boolean;
        export let toolTip: null;
        export function onUpdate(): void;
        export let multiselect: boolean;
        let preselected_1: null;
        export { preselected_1 as preselected };
        export let preexpanded: null;
        let selectedData_1: never[];
        export { selectedData_1 as selectedData };
        export function allowSelection(): boolean;
        export let dependency: undefined;
        export let childrenDependency: undefined;
        export let queryOptions: {};
        export let childrenQueryOptions: {};
        export function fetchDetails(item: any): any;
    }
}
import React from 'react';
import { func } from 'prop-types';
import { bool } from 'prop-types';
import { number } from 'prop-types';
import { object } from 'prop-types';
import { any } from 'prop-types';
