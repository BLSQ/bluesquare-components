import React from 'react';

type Props = {
    message?: string | null;
    className?: string;
    children: React.ReactNode;
};

type State = { hasError: boolean; error?: any };

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('BOUNDARY ERROR', error, errorInfo);
    }

    render() {
        const { message = null, className = undefined, children } = this.props;
        if (this.state.hasError) {
            if (message) {
                return (
                    <h1
                        style={className ? {} : { textAlign: 'center' }}
                        className={className}
                    >
                        {message}
                    </h1>
                );
            }
            return (
                <h1>An exception occurred: {this.state.error.toString()}</h1>
            );
        }
        return children;
    }
}
