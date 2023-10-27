export function TreeViewWithSearch({ label, getChildrenData, getRootData, toggleOnLabelClick, onSelect, minResultCount, inputLabelObject, withSearchButton, request, makeDropDownText, toolTip, parseNodeIds, onUpdate, multiselect, preselected, preexpanded, selectedData, allowSelection, }: {
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
        export const request: import("prop-types").Validator<(...args: any[]) => any>;
        export const makeDropDownText: import("prop-types").Validator<(...args: any[]) => any>;
        export { func as toolTip };
        export const parseNodeIds: import("prop-types").Validator<(...args: any[]) => any>;
        export { func as onUpdate };
        export { bool as multiselect };
        export const preselected: import("prop-types").Requireable<NonNullable<string | any[] | null | undefined>>;
        export { any as preexpanded };
        export const selectedData: import("prop-types").Requireable<object>;
        export const label: import("prop-types").Validator<(...args: any[]) => any>;
        export { func as allowSelection };
    }
    namespace defaultProps {
        export function getChildrenData(): void;
        export function getRootData(): void;
        export const toggleOnLabelClick: boolean;
        export function onSelect(): void;
        export const minResultCount: number;
        export const inputLabelObject: {
            id: string;
            defaultMessage: string;
        };
        export const withSearchButton: boolean;
        export const toolTip: null;
        export function onUpdate(): void;
        export const multiselect: boolean;
        const preselected_1: null;
        export { preselected_1 as preselected };
        export const preexpanded: null;
        const selectedData_1: never[];
        export { selectedData_1 as selectedData };
        export function allowSelection(): boolean;
    }
}
import React from "react";
import { func } from "prop-types";
import { bool } from "prop-types";
import { number } from "prop-types";
import { object } from "prop-types";
import { any } from "prop-types";
