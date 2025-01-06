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
    namespace defaultProps {
        let children_1: undefined;
        export { children_1 as children };
        let onError_1: undefined;
        export { onError_1 as onError };
        let placeholder_1: undefined;
        export { placeholder_1 as placeholder };
        let src_1: undefined;
        export { src_1 as src };
        let visibilitySensorProps_1: undefined;
        export { visibilitySensorProps_1 as visibilitySensorProps };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
