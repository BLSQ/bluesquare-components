export function IasoTreeView({ getChildrenData, getRootData, label, multiselect, expanded, selected, onToggle, toggleOnLabelClick, onSelect, onCheckBoxClick, onLabelClick, ticked, parentsTicked, scrollIntoView, allowSelection, queryOptions, childrenQueryOptions, dependency, }: {
    getChildrenData: any;
    getRootData: any;
    label: any;
    multiselect: any;
    expanded: any;
    selected: any;
    onToggle: any;
    toggleOnLabelClick: any;
    onSelect: any;
    onCheckBoxClick: any;
    onLabelClick: any;
    ticked: any;
    parentsTicked: any;
    scrollIntoView: any;
    allowSelection: any;
    queryOptions?: {} | undefined;
    childrenQueryOptions?: {} | undefined;
    dependency: any;
}): React.JSX.Element;
export namespace IasoTreeView {
    namespace propTypes {
        export { func as getChildrenData };
        export { func as getRootData };
        export let label: import("prop-types").Validator<(...args: any[]) => any>;
        export { bool as multiselect };
        export { bool as toggleOnLabelClick };
        export let expanded: import("prop-types").Validator<(string | null | undefined)[]>;
        export let onToggle: import("prop-types").Validator<(...args: any[]) => any>;
        export { func as onSelect };
        export { func as onCheckBoxClick };
        export { func as onLabelClick };
        export let selected: import("prop-types").Requireable<NonNullable<string | (string | null | undefined)[] | null | undefined>>;
        export let ticked: import("prop-types").Requireable<NonNullable<string | (string | null | undefined)[] | null | undefined>>;
        export { array as parentsTicked };
        export { string as scrollIntoView };
        export { func as allowSelection };
        export { object as queryOptions };
        export { object as childrenQueryOptions };
        export { any as dependency };
    }
    namespace defaultProps {
        export function getChildrenData(): void;
        export function getRootData(): void;
        export let multiselect: boolean;
        export let toggleOnLabelClick: boolean;
        export function onSelect(): void;
        export function onCheckBoxClick(): void;
        export function onLabelClick(): void;
        let selected_1: undefined;
        export { selected_1 as selected };
        let ticked_1: never[];
        export { ticked_1 as ticked };
        export let parentsTicked: never[];
        export let scrollIntoView: null;
        export function allowSelection(): boolean;
        export let queryOptions: {};
        export let childrenQueryOptions: {};
        export let dependency: undefined;
    }
}
import React from 'react';
import { func } from 'prop-types';
import { bool } from 'prop-types';
import { array } from 'prop-types';
import { string } from 'prop-types';
import { object } from 'prop-types';
import { any } from 'prop-types';
