export function EnrichedTreeItem({ label, id, fetchChildrenData, expanded, toggleOnLabelClick, onLabelClick, data, withCheckbox, ticked, parentsTicked, scrollIntoView, allowSelection, queryOptions, dependency, }: {
    label: any;
    id: any;
    fetchChildrenData?: (() => void) | undefined;
    expanded?: never[] | undefined;
    toggleOnLabelClick?: boolean | undefined;
    onLabelClick?: (() => void) | undefined;
    data: any;
    withCheckbox?: boolean | undefined;
    ticked?: never[] | undefined;
    parentsTicked?: never[] | undefined;
    scrollIntoView?: null | undefined;
    allowSelection?: (() => boolean) | undefined;
    queryOptions?: {} | undefined;
    dependency?: undefined;
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
}
import React from 'react';
import { func } from 'prop-types';
import { bool } from 'prop-types';
import { array } from 'prop-types';
import { string } from 'prop-types';
import { object } from 'prop-types';
import { any } from 'prop-types';
