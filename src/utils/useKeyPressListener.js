import { useState, useEffect } from 'react';

export const useKeyPressListener = key => {
    const [isEnabled, setIsEnabled] = useState(false);
    useEffect(() => {
        const enableListeners = (e, toggle) => {
            if (e.key === key) {
                setIsEnabled(toggle);
            }
        };
        const enable = e => {
            enableListeners(e, true);
        };
        const disable = e => {
            enableListeners(e, false);
        };
        document.addEventListener('keydown', enable);
        document.addEventListener('keyup', disable);
        document.addEventListener('blur', disable);
        return () => {
            document.removeEventListener('keydown', enable);
            document.removeEventListener('keyup', disable);
            document.removeEventListener('blur', disable);
        };
    }, [isEnabled]);

    return isEnabled;
};
