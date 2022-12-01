import { ReactElement } from 'react';

export type Item = {
    id: string | number;
};

export type Column = {
    Header: string;
    accessor: string;
    // eslint-disable-next-line no-unused-vars
    Cell?: (s: any) => ReactElement;
};
