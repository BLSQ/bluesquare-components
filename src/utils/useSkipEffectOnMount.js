import { useRef, useEffect } from 'react';

export const useSkipEffectOnMount = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) {
            func();
        } else {
            didMount.current = true;
        }
    }, deps);
};
