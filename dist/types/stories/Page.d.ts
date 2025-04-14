export function Page({ user, onLogin, onLogout, onCreateAccount }: {
    user: any;
    onLogin: any;
    onLogout: any;
    onCreateAccount: any;
}): React.JSX.Element;
export namespace Page {
    namespace propTypes {
        let user: PropTypes.Requireable<PropTypes.InferProps<{}>>;
        let onLogin: PropTypes.Validator<(...args: any[]) => any>;
        let onLogout: PropTypes.Validator<(...args: any[]) => any>;
        let onCreateAccount: PropTypes.Validator<(...args: any[]) => any>;
    }
    namespace defaultProps {
        let user_1: null;
        export { user_1 as user };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
