export class LazyImage extends React.Component<any, any, any> {
    constructor(props: any);
    image: HTMLImageElement | null;
    state: {
        image: any;
        isVisible: boolean;
        loading: boolean;
    };
    handleVisibilityChange(isVisible: any): void;
    onLoad(): void;
    onError(errorEvent: any): void;
    loadImage(src: any): void;
    componentDidUpdate(oldProps: any): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
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
