export function TreeViewResultsCountSelect({ resultsCount, handleSelect, countOptions, }: {
    resultsCount: any;
    handleSelect: any;
    countOptions: any;
}): React.JSX.Element;
export namespace TreeViewResultsCountSelect {
    namespace propTypes {
        export let countOptions: import("prop-types").Requireable<(number | null | undefined)[]>;
        export { number as resultsCount };
        export { func as handleSelect };
    }
    namespace defaultProps {
        export { ROWS_PER_PAGE_OPTIONS as countOptions };
        export function handleSelect(): null;
        export let resultsCount: number;
    }
}
import React from 'react';
import { number } from 'prop-types';
import { func } from 'prop-types';
declare const ROWS_PER_PAGE_OPTIONS: number[];
export {};
