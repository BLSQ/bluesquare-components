import { isEqual } from 'lodash';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRedirectTo, useRedirectToReplace } from '../Routing/redirections';
import { useSearchParams, URLSearchParamsInit } from 'react-router-dom';

export type FilterState = {
    filters: Record<string, any>;
    handleSearch: () => void;
    handleChange: (keyValue: string, value: unknown) => void;
    filtersUpdated: boolean;
    setFiltersUpdated: (updated: boolean) => void;
    setFilters: React.Dispatch<Record<string, any>>;
};

type FilterStateParams = {
    baseUrl: string;
    params: Record<string, unknown>;
    withPagination?: boolean;
    saveSearchInHistory?: boolean;
    searchActive?: string; // the key of the params used to activate search. If no such param exists, and the hook is used with a table, the table will load data onMount
    searchAlwaysEnabled?: boolean; // to be used with searchActive when we want to allow users to launch a search with empty filters
    withPathParams?: boolean; // if true, will use path params i.o routers' searchParams
};

const paginationParams = ['pageSize', 'page', 'order'];

const removePaginationParams = params => {
    const newParams = {
        ...params,
    };
    paginationParams.forEach(paramKey => {
        delete newParams[paramKey];
    });
    return newParams;
};

export const useFilterState = ({
    baseUrl,
    params,
    searchActive,
    withPagination = true,
    saveSearchInHistory = true,
    searchAlwaysEnabled = false,
    withPathParams = true,
}: FilterStateParams): FilterState => {
    const [filtersUpdated, setFiltersUpdated] = useState(false);
    const redirectTo = useRedirectTo();
    const redirectToReplace = useRedirectToReplace();
    const [_searchParams, setSearchParams] = useSearchParams(
        params as Record<string, string>,
    );
    const [filters, setFilters] = useState({
        ...removePaginationParams(params),
    });

    const handleSearch = useCallback(() => {
        if (filtersUpdated || searchAlwaysEnabled) {
            setFiltersUpdated(false);
            const tempParams: Record<string, string> = {
                ...params,
                ...filters,
            };
            if (withPagination) {
                tempParams.page = '1';
            }
            if (searchActive && Object.keys(params).includes(searchActive)) {
                tempParams[searchActive] = 'true';
            }
            if (withPathParams) {
                if (saveSearchInHistory) {
                    redirectTo(baseUrl, tempParams);
                } else {
                    redirectToReplace(baseUrl, tempParams);
                }
            } else {
                setSearchParams(tempParams);
            }
        }
    }, [
        filtersUpdated,
        searchAlwaysEnabled,
        params,
        filters,
        withPagination,
        searchActive,
        saveSearchInHistory,
        redirectTo,
        baseUrl,
        redirectToReplace,
        withPathParams,
        setSearchParams,
    ]);

    const updateFilters = useCallback(
        newFilters => {
            const initialFilterValue = removePaginationParams(params);
            if (!isEqual(newFilters, initialFilterValue)) {
                setFiltersUpdated(true);
            }
            if (isEqual(newFilters, initialFilterValue)) {
                setFiltersUpdated(false);
            }
            setFilters(newFilters);
        },
        [params],
    );

    const handleChange = useCallback(
        (key, value) => {
            const newFilters = {
                ...filters,
                [key]: value !== null ? value : undefined,
            };
            updateFilters(newFilters);
        },
        [filters, updateFilters],
    );

    useEffect(() => {
        setFilters(removePaginationParams(params));
    }, [params]);

    return useMemo(() => {
        return {
            filters,
            handleChange,
            handleSearch,
            filtersUpdated,
            setFiltersUpdated,
            setFilters: updateFilters,
        };
    }, [filters, handleChange, handleSearch, filtersUpdated, updateFilters]);
};

export type CheckBoxFilterArgs = {
    keyValue: string;
    handleChange: (key: string, value: boolean) => void;
    initialValue?: boolean;
};

export type CheckBoxFilter = {
    handleCheckboxChange: (key: string, value: boolean) => void;
    checkBoxValue: boolean;
};

export const useCheckBoxFilter = ({
    keyValue,
    handleChange,
    initialValue = false,
}: CheckBoxFilterArgs): CheckBoxFilter => {
    const [checkBoxValue, setCheckBoxValue] = useState<boolean>(initialValue);

    const handleCheckboxChange = useCallback(
        (_key, value) => {
            handleChange(keyValue, !checkBoxValue);
            setCheckBoxValue(value);
        },
        [checkBoxValue, handleChange, keyValue],
    );

    return useMemo(() => {
        return {
            handleCheckboxChange,
            checkBoxValue,
        };
    }, [checkBoxValue, handleCheckboxChange]);
};
