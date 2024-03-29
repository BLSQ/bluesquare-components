export function useChildrenData({ request, id, options }: {
    request: any;
    id: any;
    options: any;
}): import("react-query").UseQueryResult<any, unknown>;
export function useRootData(request: any, options?: {}): import("react-query").UseQueryResult<any, unknown>;
export function useTreeviewSearch({ request, searchValue, resultsCount, options, }: {
    request: any;
    searchValue: any;
    resultsCount: any;
    options: any;
}): import("react-query").UseQueryResult<any, unknown>;
