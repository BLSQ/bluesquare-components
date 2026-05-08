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
<<<<<<< HEAD
export { LazyImage };
=======
export namespace LazyImage {
    namespace propTypes {
        let children: PropTypes.Requireable<(...args: any[]) => any>;
        let onError: PropTypes.Requireable<(...args: any[]) => any>;
        let placeholder: PropTypes.Requireable<string>;
        let src: PropTypes.Requireable<string>;
        let visibilitySensorProps: PropTypes.Requireable<any>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
>>>>>>> main
