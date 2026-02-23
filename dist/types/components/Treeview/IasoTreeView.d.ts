export function IasoTreeView({ getChildrenData, getRootData, label, multiselect, expanded, selected, onToggle, toggleOnLabelClick, onSelect, onCheckBoxClick, onLabelClick, ticked, parentsTicked, scrollIntoView, allowSelection, queryOptions, childrenQueryOptions, dependency, }: {
    getChildrenData?: (() => void) | undefined;
    getRootData?: (() => void) | undefined;
    label: any;
    multiselect?: boolean | undefined;
    expanded: any;
    selected?: undefined;
    onToggle: any;
    toggleOnLabelClick?: boolean | undefined;
    onSelect?: (() => void) | undefined;
    onCheckBoxClick?: (() => void) | undefined;
    onLabelClick?: (() => void) | undefined;
    ticked?: never[] | undefined;
    parentsTicked?: never[] | undefined;
    scrollIntoView?: null | undefined;
    allowSelection?: (() => boolean) | undefined;
    queryOptions?: {} | undefined;
    childrenQueryOptions?: {} | undefined;
    dependency?: undefined;
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
}
import React from 'react';
import { func } from 'prop-types';
import { bool } from 'prop-types';
import { array } from 'prop-types';
import { string } from 'prop-types';
import { object } from 'prop-types';
import { any } from 'prop-types';
