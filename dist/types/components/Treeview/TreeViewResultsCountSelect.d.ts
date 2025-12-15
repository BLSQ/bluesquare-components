export function TreeViewResultsCountSelect({ resultsCount, handleSelect, countOptions, }: {
    resultsCount?: number | undefined;
    handleSelect?: (() => null) | undefined;
    countOptions?: number[] | undefined;
}): React.JSX.Element;
export namespace TreeViewResultsCountSelect {
    namespace propTypes {
        export let countOptions: import("prop-types").Requireable<(number | null | undefined)[]>;
        export { number as resultsCount };
        export { func as handleSelect };
    }
}
import React from 'react';
import { number } from 'prop-types';
import { func } from 'prop-types';
