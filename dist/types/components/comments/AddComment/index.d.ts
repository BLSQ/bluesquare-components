export function AddComment({ placeholder, minRows, maxRows, onChange, className, buttonText, onConfirm, position, inline, }: {
    placeholder: any;
    minRows: any;
    maxRows: any;
    onChange: any;
    className: any;
    buttonText: any;
    onConfirm: any;
    position: any;
    inline: any;
}): React.JSX.Element;
export namespace AddComment {
    namespace propTypes {
        const placeholder: PropTypes.Requireable<string>;
        const className: PropTypes.Requireable<string>;
        const minRows: PropTypes.Requireable<number>;
        const maxRows: PropTypes.Requireable<number>;
        const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        const onConfirm: PropTypes.Requireable<(...args: any[]) => any>;
        const buttonText: PropTypes.Requireable<string>;
        const position: PropTypes.Requireable<string>;
        const inline: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const placeholder_1: null;
        export { placeholder_1 as placeholder };
        const minRows_1: number;
        export { minRows_1 as minRows };
        const maxRows_1: number;
        export { maxRows_1 as maxRows };
        export function onChange_1(): void;
        export { onChange_1 as onChange };
        const className_1: null;
        export { className_1 as className };
        const buttonText_1: null;
        export { buttonText_1 as buttonText };
        export function onConfirm_1(): void;
        export { onConfirm_1 as onConfirm };
        const position_1: string;
        export { position_1 as position };
        const inline_1: boolean;
        export { inline_1 as inline };
    }
}
import React from "react";
import PropTypes from "prop-types";
