export function EnrichedTreeItem({ label, id, fetchChildrenData, expanded, toggleOnLabelClick, onLabelClick, data, withCheckbox, ticked, parentsTicked, scrollIntoView, allowSelection, queryOptions, }: {
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
}): React.JSX.Element;
export namespace EnrichedTreeItem {
    namespace propTypes {
        export const label: import("prop-types").Validator<(...args: any[]) => any>;
        export const id: import("prop-types").Validator<string>;
        export { func as fetchChildrenData };
        export const expanded: import("prop-types").Requireable<(string | null | undefined)[]>;
        export { bool as toggleOnLabelClick };
        export const data: import("prop-types").Validator<object>;
        export { func as onLabelClick };
        export { bool as withCheckbox };
        export const ticked: import("prop-types").Requireable<NonNullable<string | any[] | null | undefined>>;
        export { array as parentsTicked };
        export { string as scrollIntoView };
        export { func as allowSelection };
        export { object as queryOptions };
    }
    namespace defaultProps {
        export function fetchChildrenData(): void;
        const expanded_1: never[];
        export { expanded_1 as expanded };
        export const toggleOnLabelClick: boolean;
        export function onLabelClick(): void;
        export const withCheckbox: boolean;
        const ticked_1: never[];
        export { ticked_1 as ticked };
        export const parentsTicked: never[];
        export const scrollIntoView: null;
        export function allowSelection(): boolean;
        export const queryOptions: {};
    }
}
import React from "react";
import { func } from "prop-types";
import { bool } from "prop-types";
import { array } from "prop-types";
import { string } from "prop-types";
import { object } from "prop-types";
