export class ErrorBoundary extends React.Component<any, any, any> {
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
        error: any;
    };
    constructor(props: any);
    state: {
        hasError: boolean;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    render(): any;
}
export namespace ErrorBoundary {
    namespace propTypes {
        let children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        let message: PropTypes.Requireable<string>;
        let className: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        let message_1: null;
        export { message_1 as message };
        let className_1: null;
        export { className_1 as className };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
