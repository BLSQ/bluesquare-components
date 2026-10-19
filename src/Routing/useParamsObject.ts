import { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getParamsFromList, getParamsFromPath } from './utils';

export const useParamsObject = (
    baseUrl: string,
    configs: Record<string, string[]>,
): Record<string, string | Record<string, unknown> | undefined> => {
    // useParams() is already decoded by react-router, "%2F" included, so the values are read from the raw pathname
    const { pathname } = useLocation();
    const splat = useParams()['*'] ?? '';
    return useMemo(() => {
        const paramKeys = configs[baseUrl];
        return (
            getParamsFromPath(pathname, baseUrl, paramKeys) ??
            getParamsFromList(splat.split('/'), paramKeys)
        );
    }, [baseUrl, configs, pathname, splat]);
};
