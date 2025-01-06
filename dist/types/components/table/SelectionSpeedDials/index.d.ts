export function SelectionSpeedDials({ hidden, actions, selection, reset, actionMessage, }: {
    hidden: any;
    actions: any;
    selection: any;
    reset: any;
    actionMessage: any;
}): React.JSX.Element;
export namespace SelectionSpeedDials {
    namespace defaultProps {
        let hidden: boolean;
        let actions: never[];
        function reset(): null;
    }
    namespace propTypes {
        let hidden_1: PropTypes.Requireable<boolean>;
        export { hidden_1 as hidden };
        let actions_1: PropTypes.Requireable<any[]>;
        export { actions_1 as actions };
        export let selection: PropTypes.Validator<object>;
        let reset_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { reset_1 as reset };
        export let actionMessage: PropTypes.Validator<string>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
