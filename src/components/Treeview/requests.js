import { useQuery } from 'react-query';

export const useChildrenData = ({ request, id, options, dependency }) =>
    useQuery(
        ['getChildrenData', request, id, ...(dependency ? [dependency] : [])],
        async () => request(id),
        {
            retry: false,
            keepPreviousData: false,
            ...options,
        },
    );

export const useRootData = (request, options = {}, dependency) =>
    useQuery(
        ['getRootData', request, ...(dependency ? [dependency] : [])],
        async () => request(),
        {
            retry: false,
            keepPreviousData: false,
            ...options,
        },
    );
export const useTreeviewSearch = ({
    request,
    searchValue,
    resultsCount,
    options,
    dependency,
}) =>
    useQuery(
        [
            'TreeviewSearch',
            request,
            searchValue,
            resultsCount,
            ...(dependency ? [dependency] : []),
        ],
        async () => {
            const queryResult = await request(searchValue, resultsCount);
            return queryResult;
        },
        // keepPreviousData=true avoids flicker when changing resultsCount
        { initialData: [], retry: false, ...options, keepPreviousData: true },
    );
