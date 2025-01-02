export function EnrichedTreeItem({ label, id, fetchChildrenData, expanded, toggleOnLabelClick, onLabelClick, data, withCheckbox, ticked, parentsTicked, scrollIntoView, allowSelection, queryOptions, dependency, }: {
    label: any;
    id: any;
    fetchChildrenData: any;
    expanded: any;
    toggleOnLabelClick: any;
    onLabelClick: any;
    data: any;
    withCheckbox: any;
    ticked: any;
    parentsTicked: any;
    scrollIntoView: any;
    allowSelection: any;
    queryOptions?: {} | undefined;
    dependency: any;
}): React.JSX.Element;
export namespace EnrichedTreeItem {
    namespace propTypes {
        export let label: import("prop-types").Validator<(...args: any[]) => any>;
        export let id: import("prop-types").Validator<string>;
        export { func as fetchChildrenData };
        export let expanded: import("prop-types").Requireable<(string | null | undefined)[]>;
        export { bool as toggleOnLabelClick };
        export let data: import("prop-types").Validator<object>;
        export { func as onLabelClick };
        export { bool as withCheckbox };
        export let ticked: import("prop-types").Requireable<NonNullable<string | any[] | null | undefined>>;
        export { array as parentsTicked };
        export { string as scrollIntoView };
        export { func as allowSelection };
        export { object as queryOptions };
        export { any as dependency };
    }
    namespace defaultProps {
        export function fetchChildrenData(): void;
        let expanded_1: never[];
        export { expanded_1 as expanded };
        export let toggleOnLabelClick: boolean;
        export function onLabelClick(): void;
        export let withCheckbox: boolean;
        let ticked_1: never[];
        export { ticked_1 as ticked };
        export let parentsTicked: never[];
        export let scrollIntoView: null;
        export function allowSelection(): boolean;
        export let queryOptions: {};
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
