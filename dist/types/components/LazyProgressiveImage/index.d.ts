import React, { Component } from 'react';
type Props = {
    children?: (image: string, loading: boolean, isVisible: boolean) => React.ReactNode;
    onError?: (event: ErrorEvent | Event) => void;
    placeholder?: string;
    src?: string;
    visibilitySensorProps?: any;
};
type State = {
    isVisible?: boolean;
    image?: any;
    loading?: boolean;
};
declare class LazyImage extends Component<Props, State> {
    image: HTMLImageElement | null;
    constructor(props: any);
    componentDidUpdate(oldProps: any): void;
    componentWillUnmount(): void;
    handleVisibilityChange(isVisible: any): void;
    onLoad(): void;
    onError(errorEvent: any): void;
    loadImage(src: any): void;
    render(): React.JSX.Element;
}
export { LazyImage };
