export default TreeItems;
declare function TreeItems({ items, initialItems, disabled, style, label, onLabelClick, }: {
    items: any;
    initialItems: any;
    disabled: any;
    style: any;
    label: any;
    onLabelClick: any;
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
    namespace defaultProps {
        let disabled_1: boolean;
        export { disabled_1 as disabled };
        let style_1: {};
        export { style_1 as style };
        export function onLabelClick_1(): void;
        export { onLabelClick_1 as onLabelClick };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
