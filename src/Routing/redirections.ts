import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { makeRedirectionUrl } from './utils';

export type RedirectFn = (
    // eslint-disable-next-line no-unused-vars
    url: string,
    // eslint-disable-next-line no-unused-vars
    params?: Record<string, string | undefined>,
) => void;

export const useRedirectTo = (): RedirectFn => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    return useCallback(
        (url: string, params?: Record<string, string | undefined>) => {
            const destination = makeRedirectionUrl(url, params);
            navigate(destination, { state: { location: pathname } });
        },
        [navigate, pathname],
    );
};
export const useRedirectToReplace = (): RedirectFn => {
    const navigate = useNavigate();
    // When replacing, we pass the old state to avoid losing the point of origin
    const { state } = useLocation();
    return useCallback(
        (url: string, params?: Record<string, string | undefined>) => {
            const destination = makeRedirectionUrl(url, params);
            navigate(destination, {
                replace: true,
                state,
            });
        },
        [navigate, state],
    );
};

export const useGoBack = (
    fallBackUrl = 'home',
    nested = false,
): (() => void) => {
    const navigate = useNavigate();
    const { state, pathname } = useLocation();
    // We need different behaviour for "nested" back arrows, otherwise deep-linking will lead to circular rerouting
    return useCallback(() => {
        const options = !nested ? { location: pathname } : null;
        if (!state) {
            navigate(`/${fallBackUrl}`, { state: options });
        } else {
            navigate(-1);
        }
    }, [fallBackUrl, navigate, nested, pathname, state]);
};
