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
        const children: PropTypes.Requireable<(...args: any[]) => any>;
        const onError: PropTypes.Requireable<(...args: any[]) => any>;
        const placeholder: PropTypes.Requireable<string>;
        const src: PropTypes.Requireable<string>;
        const visibilitySensorProps: PropTypes.Requireable<any>;
    }
    namespace defaultProps {
        const children_1: undefined;
        export { children_1 as children };
        const onError_1: undefined;
        export { onError_1 as onError };
        const placeholder_1: undefined;
        export { placeholder_1 as placeholder };
        const src_1: undefined;
        export { src_1 as src };
        const visibilitySensorProps_1: undefined;
        export { visibilitySensorProps_1 as visibilitySensorProps };
    }
}
import React from "react";
import PropTypes from "prop-types";
