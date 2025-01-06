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
        let placeholder: PropTypes.Requireable<string>;
        let className: PropTypes.Requireable<string>;
        let minRows: PropTypes.Requireable<number>;
        let maxRows: PropTypes.Requireable<number>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
        let onConfirm: PropTypes.Requireable<(...args: any[]) => any>;
        let buttonText: PropTypes.Requireable<string>;
        let position: PropTypes.Requireable<string>;
        let inline: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        let placeholder_1: null;
        export { placeholder_1 as placeholder };
        let minRows_1: number;
        export { minRows_1 as minRows };
        let maxRows_1: number;
        export { maxRows_1 as maxRows };
        export function onChange_1(): void;
        export { onChange_1 as onChange };
        let className_1: null;
        export { className_1 as className };
        let buttonText_1: null;
        export { buttonText_1 as buttonText };
        export function onConfirm_1(): void;
        export { onConfirm_1 as onConfirm };
        let position_1: string;
        export { position_1 as position };
        let inline_1: boolean;
        export { inline_1 as inline };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
