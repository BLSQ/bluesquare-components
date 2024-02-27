export function IasoTreeView({ getChildrenData, getRootData, label, multiselect, expanded, selected, onToggle, toggleOnLabelClick, onSelect, onCheckBoxClick, onLabelClick, ticked, parentsTicked, scrollIntoView, allowSelection, queryOptions, childrenQueryOptions, }: {
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
}): React.JSX.Element;
export namespace IasoTreeView {
    namespace propTypes {
        export { func as getChildrenData };
        export { func as getRootData };
        export const label: import("prop-types").Validator<(...args: any[]) => any>;
        export { bool as multiselect };
        export { bool as toggleOnLabelClick };
        export const expanded: import("prop-types").Validator<(string | null | undefined)[]>;
        export const onToggle: import("prop-types").Validator<(...args: any[]) => any>;
        export { func as onSelect };
        export { func as onCheckBoxClick };
        export { func as onLabelClick };
        export const selected: import("prop-types").Requireable<NonNullable<string | (string | null | undefined)[] | null | undefined>>;
        export const ticked: import("prop-types").Requireable<NonNullable<string | (string | null | undefined)[] | null | undefined>>;
        export { array as parentsTicked };
        export { string as scrollIntoView };
        export { func as allowSelection };
        export { object as queryOptions };
        export { object as childrenQueryOptions };
    }
    namespace defaultProps {
        export function getChildrenData(): void;
        export function getRootData(): void;
        export const multiselect: boolean;
        export const toggleOnLabelClick: boolean;
        export function onSelect(): void;
        export function onCheckBoxClick(): void;
        export function onLabelClick(): void;
        const selected_1: undefined;
        export { selected_1 as selected };
        const ticked_1: never[];
        export { ticked_1 as ticked };
        export const parentsTicked: never[];
        export const scrollIntoView: null;
        export function allowSelection(): boolean;
        export const queryOptions: {};
        export const childrenQueryOptions: {};
    }
}
import React from "react";
import { func } from "prop-types";
import { bool } from "prop-types";
import { array } from "prop-types";
import { string } from "prop-types";
import { object } from "prop-types";
