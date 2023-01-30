import { useRef, useEffect, RefObject, useState, useLayoutEffect } from 'react';

// source : https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
const useWindowSize = (): [number, number] => {
    const [size, setSize] = useState<[number, number]>([0, 0]);
    useLayoutEffect(() => {
        const updateSize = (): void => {
            setSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
};

// eslint-disable-next-line no-unused-vars
export const useAccessDOMNode = (callback: (ref: RefObject<any>) => void) => {
    const ref = useRef();
    // We need to track windowSize to force a render onResize, otherwise, the text position will be off when resizing
    const size = useWindowSize();

    useEffect(() => {
        callback(ref);
    }, [callback, size]);
    return ref;
};
