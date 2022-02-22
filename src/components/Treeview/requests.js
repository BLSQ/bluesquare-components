import { useQuery } from 'react-query';

export const useChildrenData = ({ request, id, options }) =>
    useQuery(['getChildrenData', request, id], async () => request(id), {
        retry: false,
        ...options,
    });

export const useRootData = (request, options = {}) =>
    useQuery(['getRootData', request], async () => request(), {
        retry: false,
        ...options,
        keepPreviousData: false,
    });
export const useTreeviewSearch = ({
    request,
    searchValue,
    resultsCount,
    options,
}) =>
    useQuery(
        ['TreeviewSearch', request, searchValue, resultsCount],
        async () => {
            const queryResult = await request(searchValue, resultsCount);
            return queryResult;
        },
        // keepPreviousData=true avoids flicker when changing resultsCount
        { initialData: [], retry: false, ...options, keepPreviousData: true },
    );
