import type { IntlMessage } from '../types/types';
export declare const noop: () => void;
export declare const intlMsg: (id: string, defaultMessage: string) => IntlMessage;
export declare const tableColumns: {
    Header: string;
    accessor: string;
}[];
export declare const tableData: {
    name: string;
}[];
