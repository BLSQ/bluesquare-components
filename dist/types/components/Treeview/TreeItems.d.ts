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
        const items: PropTypes.Validator<Map<unknown, unknown>>;
        const initialItems: PropTypes.Validator<Map<unknown, unknown>>;
        const disabled: PropTypes.Requireable<boolean>;
        const style: PropTypes.Requireable<object>;
        const label: PropTypes.Validator<(...args: any[]) => any>;
        const onLabelClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        const style_1: {};
        export { style_1 as style };
        export function onLabelClick_1(): void;
        export { onLabelClick_1 as onLabelClick };
    }
}
import React from "react";
import PropTypes from "prop-types";
