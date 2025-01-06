export function TruncatedTreeview({ selectedItems, label, redirect, disabled }: {
    selectedItems: any;
    label: any;
    redirect: any;
    disabled: any;
}): React.JSX.Element;
export namespace TruncatedTreeview {
    namespace propTypes {
        export { any as selectedItems };
        export let label: import("prop-types").Validator<(...args: any[]) => any>;
        export { func as redirect };
        export { bool as disabled };
    }
    namespace defaultProps {
        let selectedItems: null;
        function redirect(): null;
        let disabled: boolean;
    }
}
import React from 'react';
import { any } from 'prop-types';
import { func } from 'prop-types';
import { bool } from 'prop-types';
