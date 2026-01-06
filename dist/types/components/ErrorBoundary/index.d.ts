import React from 'react';
type Props = {
    message?: string | null;
    className?: string;
    children: React.ReactNode;
};
type State = {
    hasError: boolean;
    error?: any;
};
export declare class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: any);
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
        error: any;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    render(): string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element | null | undefined;
}
export {};
