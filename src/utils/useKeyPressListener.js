import { useState, useEffect, useRef } from 'react';

// Shared ref to track active key listeners across all hook instances
const activeKeys = new Set();

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

        // Only add listeners if this is the first instance for this key
        if (!activeKeys.has(key)) {
            activeKeys.add(key);
            document.addEventListener('keydown', enable);
            document.addEventListener('keyup', disable);
            document.addEventListener('blur', disable);
        }

        return () => {
            // Only remove listeners if this is the last instance for this key
            if (activeKeys.has(key)) {
                activeKeys.delete(key);
                document.removeEventListener('keydown', enable);
                document.removeEventListener('keyup', disable);
                document.removeEventListener('blur', disable);
            }
        };
    }, [key, activeKeys, isEnabled]);

    return isEnabled;
};
