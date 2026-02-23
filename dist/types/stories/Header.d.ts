export function Header({ user, onLogin, onLogout, onCreateAccount }: {
    user?: null | undefined;
    onLogin: any;
    onLogout: any;
    onCreateAccount: any;
}): React.JSX.Element;
export namespace Header {
    namespace propTypes {
        let user: PropTypes.Requireable<PropTypes.InferProps<{}>>;
        let onLogin: PropTypes.Validator<(...args: any[]) => any>;
        let onLogout: PropTypes.Validator<(...args: any[]) => any>;
        let onCreateAccount: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
