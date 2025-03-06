import React from 'react';
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
    searchActive?: string;
    searchAlwaysEnabled?: boolean;
};
export declare const useFilterState: ({ baseUrl, params, searchActive, withPagination, saveSearchInHistory, searchAlwaysEnabled, }: FilterStateParams) => FilterState;
export type CheckBoxFilterArgs = {
    keyValue: string;
    handleChange: (key: string, value: boolean) => void;
    initialValue?: boolean;
};
export type CheckBoxFilter = {
    handleCheckboxChange: (key: string, value: boolean) => void;
    checkBoxValue: boolean;
};
export declare const useCheckBoxFilter: ({ keyValue, handleChange, initialValue, }: CheckBoxFilterArgs) => CheckBoxFilter;
export {};
