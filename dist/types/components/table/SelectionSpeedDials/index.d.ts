export function SelectionSpeedDials({ hidden, actions, selection, reset, actionMessage, }: {
    hidden: any;
    actions: any;
    selection: any;
    reset: any;
    actionMessage: any;
}): React.JSX.Element;
export namespace SelectionSpeedDials {
    namespace defaultProps {
        const hidden: boolean;
        const actions: never[];
        function reset(): null;
    }
    namespace propTypes {
        const hidden_1: PropTypes.Requireable<boolean>;
        export { hidden_1 as hidden };
        const actions_1: PropTypes.Requireable<any[]>;
        export { actions_1 as actions };
        export const selection: PropTypes.Validator<object>;
        const reset_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { reset_1 as reset };
        export const actionMessage: PropTypes.Validator<string>;
    }
}
import React from "react";
import PropTypes from "prop-types";
