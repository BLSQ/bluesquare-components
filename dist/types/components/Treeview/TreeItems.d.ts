import { FunctionComponent, ReactNode } from 'react';
type Props = {
    items: Map<any, any>;
    initialItems: Map<any, any>;
    label: (value: any) => ReactNode;
    disabled?: boolean;
    style?: object;
    onLabelClick?: (item: any) => void;
};
declare const TreeItems: FunctionComponent<Props>;
export default TreeItems;
<<<<<<< HEAD
=======
declare function TreeItems({ items, initialItems, disabled, style, label, onLabelClick, }: {
    items: any;
    initialItems: any;
    disabled?: boolean | undefined;
    style?: {} | undefined;
    label: any;
    onLabelClick?: (() => void) | undefined;
}): React.JSX.Element | null;
declare namespace TreeItems {
    namespace propTypes {
        let items: PropTypes.Validator<Map<unknown, unknown>>;
        let initialItems: PropTypes.Validator<Map<unknown, unknown>>;
        let disabled: PropTypes.Requireable<boolean>;
        let style: PropTypes.Requireable<object>;
        let label: PropTypes.Validator<(...args: any[]) => any>;
        let onLabelClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
>>>>>>> main
