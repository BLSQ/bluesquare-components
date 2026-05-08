<<<<<<< HEAD
import { FunctionComponent, ReactNode } from 'react';
type Props = {
    selectedItems: Map<string, Map<string, string>>;
    label: (value: any) => ReactNode;
    redirect?: (id: any) => void;
    disabled?: boolean;
};
export declare const TruncatedTreeview: FunctionComponent<Props>;
export {};
=======
export function TruncatedTreeview({ selectedItems, label, redirect, disabled, }: {
    selectedItems?: null | undefined;
    label: any;
    redirect?: (() => null) | undefined;
    disabled?: boolean | undefined;
}): React.JSX.Element;
export namespace TruncatedTreeview {
    namespace propTypes {
        export { any as selectedItems };
        export let label: import("prop-types").Validator<(...args: any[]) => any>;
        export { func as redirect };
        export { bool as disabled };
    }
}
import React from 'react';
import { any } from 'prop-types';
import { func } from 'prop-types';
import { bool } from 'prop-types';
>>>>>>> main
