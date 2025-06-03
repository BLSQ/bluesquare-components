import { useEffect } from 'react';

export const usePageTitle = (title = '', appTitle = '') => {
    // Set the page title from the top bar title.
    useEffect(() => {
        document.title = `${appTitle} ${title}`;
    }, [title, appTitle]);
};
