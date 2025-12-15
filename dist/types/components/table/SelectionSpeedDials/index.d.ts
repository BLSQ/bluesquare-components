export function SelectionSpeedDials({ hidden, actions, selection, reset, actionMessage, }: {
    hidden?: boolean | undefined;
    actions?: never[] | undefined;
    selection: any;
    reset?: (() => null) | undefined;
    actionMessage: any;
}): React.JSX.Element;
export namespace SelectionSpeedDials {
    namespace propTypes {
        let hidden: PropTypes.Requireable<boolean>;
        let actions: PropTypes.Requireable<any[]>;
        let selection: PropTypes.Validator<object>;
        let reset: PropTypes.Requireable<(...args: any[]) => any>;
        let actionMessage: PropTypes.Validator<string>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
