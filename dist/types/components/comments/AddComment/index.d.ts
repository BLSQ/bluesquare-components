export function AddComment({ placeholder, minRows, maxRows, onChange, className, buttonText, onConfirm, position, inline, }: {
    placeholder?: null | undefined;
    minRows?: number | undefined;
    maxRows?: number | undefined;
    onChange?: (() => void) | undefined;
    className?: null | undefined;
    buttonText?: null | undefined;
    onConfirm?: (() => void) | undefined;
    position?: string | undefined;
    inline?: boolean | undefined;
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
}
import React from 'react';
import PropTypes from 'prop-types';
